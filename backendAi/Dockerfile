# Choose our version of Python
FROM python:3.12

# Set up a working directory
WORKDIR /code

# Copy the entire content of the repository into the working directory
COPY . /code

# Crear el entorno virtual y activarlo
RUN python -m venv venv

# Instalar uvicorn en el entorno virtual
RUN /code/venv/bin/pip install --no-cache-dir uvicorn

# Instalar dependencias
RUN /code/venv/bin/pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 8000

# Ejecutar la aplicación FastAPI
CMD ["/code/venv/bin/uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]

