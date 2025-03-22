import { baseURL } from '../constants.js';

const handleFetch = async (endpoint, opts = {}) => {
  const ep = `${baseURL}/${endpoint}`;

  try {
    const response = fetch(ep, opts);
    const { ok, status, statusText, headers } = response;

    if (!ok) {
      throw new Error(`Fetch failed with status code ${status}, ${statusText}`);
    }

    const isJson = headers.get('Content-Type').includes('application/json');

    const data = await (isJson ? response.json() : response.text());

    return [data, null];
  } catch (error) {
    console.warn(error);
    return [null, error];
  }
};

export default handleFetch;
