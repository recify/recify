import { useEffect, useState } from 'react';
import Search from '../Shared/Search.jsx';
import handleFetch from '../../handlers/handleFetch.js';
import { randomEP } from '../../constants.js';
import RecipeDisplay from './RecipeDisplay.jsx';
import './Home.styles.css';

const fetchRandomRecipes = async () => {
  const generatedRecipes = [];

  for (let i = 0; i < 4; i++) {
    const [data, error] = await handleFetch(randomEP);

    if (error) {
      return null;
    }

    generatedRecipes.push(data.meals[0]);
  }

  return generatedRecipes;
};

const Home = () => {
  const [query, setQuery] = useState('');
  const [generated, setGenerated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const recipes = await fetchRandomRecipes();

      if (recipes) {
        setGenerated(recipes);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <Search query={query} setQuery={setQuery} />
      <section className="generated">
        <h2 className="generated-title">Generated Recipes For You!</h2>
        <div className="recipe-display-container">
          {!loading &&
            generated.map((recipe) => (
              <RecipeDisplay
                name={recipe.strMeal}
                image={recipe.strMealThumb}
                id={recipe.idMeal}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
