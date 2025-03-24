import { baseURL } from '../constants.js';

const handleFetch = async (endpoint, opts = {}) => {
  const ep = `${baseURL}/${endpoint}`;

  try {
    const response = await fetch(ep, opts);
    const { ok, status, statusText } = response;

    if (!ok) {
      throw new Error(`Fetch failed with status code ${status}, ${statusText}`);
    }

    const data = await response.json();

    return [data, null];
  } catch (error) {
    console.warn(error);
    return [null, error];
  }
};

export default handleFetch;
