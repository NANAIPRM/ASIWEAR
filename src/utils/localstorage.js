const ACCES_TOKEN = "accessToken";

export const setAccessToken = (token) =>
  localStorage.setItem(ACCES_TOKEN, token);

export const getAccessToken = () => localStorage.getItem(ACCES_TOKEN);

export const removeAccessToken = () => localStorage.removeItem(ACCES_TOKEN);
