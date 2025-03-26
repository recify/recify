import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import handleFetch from '../../handlers/handleFetch.js';
import { searchEP } from '../../constants.js';
import RecipeDisplay from '../Home/RecipeDisplay.jsx';
import Search from '../Shared/Search.jsx';
import SearchContext from '../../context/SearchContext.js';
import { FaTimes } from 'react-icons/fa';

const Recipes = () => {
  const [found, setFound] = useState([]);
  const [loading, setLoading] = useState(true);

  const urlQuery = useLocation().pathname.split('/')[2];
  const [_, setQuery] = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (found) {
        setFound([]);
      }
      setLoading(true);

      const [data] = await handleFetch(searchEP(urlQuery));

      setQuery(urlQuery);

      setFound(data.meals);

      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlQuery]); // if we add found as a dependency, the effect re-runs

  return (
    <section id="recipes">
      <Search />
      <div className="recipe-display-container">
        <FaTimes
          className="recipe-close-button"
          onClick={() => navigate('/')}
        />
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
