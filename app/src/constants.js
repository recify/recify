// API STUFF

export const baseURL = 'https://www.themealdb.com/api/json/v1/1';

export const randomEP = 'random.php';
export const searchEP = (query) => {
  return `search.php?s=${encodeURI(query)}`;
};
export const lookupEP = (id) => {
  return `lookup.php?i=${id}`;
};
