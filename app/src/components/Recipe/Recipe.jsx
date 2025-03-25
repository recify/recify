import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import handleFetch from '../../handlers/handleFetch.js';
import { lookupEP } from '../../constants.js';

const Recipe = () => {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  const passedRecipeDetails = location.state?.recipeDetails;

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      if (!passedRecipeDetails) {
        const [data] = await handleFetch(lookupEP(id));
        setRecipeDetails(data.meals[0]);
      } else {
        setRecipeDetails(passedRecipeDetails);
      }
    };

    fetchRecipeDetails();
  }, [id, passedRecipeDetails]);

  const { strMeal: name, strMealThumb: image, idMeal } = recipeDetails;
  return (
    <div className="recipe" id={`recipe-${idMeal}`}>
      <h2>{name}</h2>
      <div className="recipe-image-ingredients-container">
        <img src={image} className="recipe-image" alt={`Image of ${name}`} />
      </div>
    </div>
  );
};

export default Recipe;
