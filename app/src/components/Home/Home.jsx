import { useEffect, useState } from 'react';
import Search from '../Shared/Search.jsx';
import handleFetch from '../../handlers/handleFetch.js';
import { randomEP } from '../../constants.js';

const Home = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchRandomRecipe = async () => {
      const [data, error] = await handleFetch(randomEP);

      if (error) {
        return null;
      }

      return data;
    };

    console.log(fetchRandomRecipe());
  }, []);

  return (
    <div>
      <Search query={query} setQuery={setQuery} />
    </div>
  );
};

export default Home;
