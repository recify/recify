const handleFetch = async (url, opts = {}) => {
  try {
    const response = fetch(url, opts);
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
