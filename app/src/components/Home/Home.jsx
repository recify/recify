import { useContext, useEffect, useState } from 'react';
import handleFetch from '../../handlers/handleFetch.js';
import { randomEP } from '../../constants.js';
import RecipeDisplay from './RecipeDisplay.jsx';
import './Home.styles.css';
import Search from '../Shared/Search.jsx';
import SearchContext from '../../context/SearchContext.js';

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
  const [generated, setGenerated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [_, setQuery] = useContext(SearchContext);

  useEffect(() => {
    setQuery('');

    const fetchData = async () => {
      setLoading(true);
      const recipes = await fetchRandomRecipes();

      if (recipes) {
        setGenerated(recipes);
      }

      setLoading(false);
    };

    fetchData();
  }, [setQuery]);

  return (
    <section id="section-home">
      <Search />

      <h2 className="generated-title">Generated Recipes For You!</h2>
      <div className="recipe-display-container">
        {!loading &&
          generated.map((recipe) => (
            <RecipeDisplay
              name={recipe.strMeal}
              image={recipe.strMealThumb}
              id={recipe.idMeal}
              recipeDetails={recipe}
              key={recipe.idMeal}
            />
          ))}
      </div>
    </section>
  );
};

export default Home;
