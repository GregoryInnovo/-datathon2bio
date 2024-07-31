const devlopment_mode = () => {
  const isDev = import.meta.env.DEV;

  if (isDev) {
    return import.meta.env.PUBLIC_API_URL;
    return import.meta.env.PUBLIC_LOCAL_URL;
  }
  return import.meta.env.PUBLIC_API_URL;
};

export const API_URL = devlopment_mode();

export const API_URL2 = "http://localhost:5000/api/semantic-search";
