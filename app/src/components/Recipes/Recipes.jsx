import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import handleFetch from '../../handlers/handleFetch.js';
import { searchEP } from '../../constants.js';
import RecipeDisplay from '../Home/RecipeDisplay.jsx';

const Recipes = () => {
  const [found, setFound] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = useLocation().pathname.split('/')[2];

  useEffect(() => {
    const fetchData = async () => {
      if (found) {
        setFound([]);
      }
      setLoading(true);

      const [data] = await handleFetch(searchEP(query));

      console.log(data);
      setFound(data.meals);

      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]); // if we add found as a dependency, the effect re-runs

  return (
    <section id="recipes">
      <div className="recipe-display-container">
        {loading && <p>Loading...</p>}
        {found ? (
          found.map((recipe) => (
            <RecipeDisplay
              name={recipe.strMeal}
              image={recipe.strMealThumb}
              id={recipe.idMeal}
              recipeDetails={recipe}
              key={recipe.idMeal}
            />
          ))
        ) : (
          <p>Not Found</p>
        )}
      </div>
    </section>
  );
};

export default Recipes;
