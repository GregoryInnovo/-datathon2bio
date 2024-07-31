from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from openai import AzureOpenAI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
import logging

# Configurar logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

load_dotenv()
app = FastAPI()

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar el DataFrame
try:
    df = pd.read_excel('./dbAll.xlsx')    
    df['total_text'] = df.apply(lambda x: f"{x['verbatimScientificName']} {x['IUCN_class']} {x['order']} {x['family']} {x['genus']} {x['taxonRank']} {x['Grupo']} {x['kingdom']} {x['phylum']} {x['species']} {x['stateProvince']} ", axis=1)
    logger.info("DataFrame cargado y procesado.")
except Exception as e:
    logger.error(f"Error al cargar el DataFrame: {str(e)}")
    raise

# Configurar cliente Azure
try:
    client_azure = AzureOpenAI(
        api_version="2023-12-01-preview",
        api_key=os.getenv('AZURE_OPENAI_API_KEY'),
        azure_endpoint=os.getenv('AZURE_OPENAI_ENDPOINT')
    )
    logger.info("Cliente Azure configurado correctamente")
except Exception as e:
    logger.error(f"Error al configurar cliente Azure: {str(e)}")
    raise

def get_embedding(text, model="smallembeddings"):
    try:
        text = text.replace("\n", " ")
        return client_azure.embeddings.create(input=[text], model=model).data[0].embedding
    except Exception as e:
        logger.error(f"Error al obtener embedding: {str(e)}")
        raise

# Generar embeddings para el DataFrame
try:
    df['text_embedding'] = df['total_text'].apply(lambda x: get_embedding(x))
    logger.info("Embeddings generados para el DataFrame.")
except Exception as e:
    logger.error(f"Error al generar embeddings: {str(e)}")
    raise

def top_n_similar_species(query, n, model='smallembeddings'):
    try:
        query_embedding = get_embedding(query, model=model)
        query_embedding = np.array(query_embedding).reshape(1, -1)
        
        # Calcula la similitud del coseno entre la consulta y todas las especies
        similarities = cosine_similarity(query_embedding, np.array(df['text_embedding'].tolist()))
        
        # Obtiene los índices de los n resultados más similares
        top_n_indices = similarities[0].argsort()[-n:][::-1]
        
        # Devuelve las n especies más similares
        return df.iloc[top_n_indices][['verbatimScientificName','IUCN_class','family','genus','taxonRank','Grupo','kingdom','phylum','species','stateProvince']]
    except Exception as e:
        logger.error(f"Error en top_n_similar_species: {str(e)}")
        raise

class Query(BaseModel):
    text: str
    n: int = 5

@app.get("/")
async def read_root():
    return {"message": "Welcome to the species search API explain!"}

@app.post("/searchExplain")
async def search(query: Query):
    try:
        logger.info(f"Búsqueda iniciada con query: {query.text}")
        results = top_n_similar_species(query.text, query.n)
        
        # Convertir resultados a una lista de diccionarios
        results_list = results.to_dict('records')
        
        # Verificar si los resultados están vacíos
        if not results_list:
            return {"results": []}
        
        return {"results": results_list}
    except Exception as e:
        logger.error(f"Error en la búsqueda: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
