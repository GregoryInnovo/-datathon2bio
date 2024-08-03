const devlopment_mode = () => {
  const isDev = import.meta.env.DEV;

  if (isDev) {
    return import.meta.env.PUBLIC_LOCAL_URL;
  }
  // Update this to your production URL
  return import.meta.env.PUBLIC_API_URL;
};

export const API_URL = devlopment_mode();
