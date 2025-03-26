import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import handleFetch from '../../handlers/handleFetch.js';
import { lookupEP } from '../../constants.js';
import './Recipe.styles.css';
import { FaTimes } from 'react-icons/fa';

const bundleIngredients = (recipe) => {
  const bundle = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (!ingredient) {
      break;
    }

    bundle.push(`${measure} of ${ingredient}`);
  }

  return bundle;
};

const Recipe = () => {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const passedRecipeDetails = location.state?.recipeDetails;

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setLoading(true);

      if (!passedRecipeDetails) {
        const [data] = await handleFetch(lookupEP(id));
        setRecipeDetails(data.meals[0]);
      } else {
        setRecipeDetails(passedRecipeDetails);
      }

      setLoading(false);
    };

    fetchRecipeDetails();
  }, [id, passedRecipeDetails]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const {
    strMeal: name,
    strMealThumb: image,
    strInstructions: instructions,
    strYoutube: youtube,
    idMeal,
  } = recipeDetails;
  const bundleArr = bundleIngredients(recipeDetails);

  return (
    <div className="recipe" id={`recipe-${idMeal}`}>
      <FaTimes className="recipe-close-button" onClick={() => navigate(-1)} />
      <div className="recipe-header">
        <h1>{name}</h1>
      </div>
      <div className="recipe-'fo-container">
        <div className="recipe-image-video-container">
          <img src={image} className="recipe-image" alt={`Image of ${name}`} />

          <iframe
            width="400"
            height="300"
            src={`https://www.youtube.com/embed/${youtube.split('=')[1]}`}
          ></iframe>
        </div>

        <div className="recipe-info">
          <div className="recipe-ingredients-container">
            <h2>Ingredients</h2>
            <ul>
              {bundleArr.map((bundle) => (
                <li key={bundle} className="recipe-ingredient">
                  {bundle}
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-instructions-container">
            <h2>Instructions</h2>
            <ul className="recipe-instructions">
              {instructions.split('\n').map((step) =>
                step.trim() ? (
                  <li key={step} className="recipe-step">
                    {step}
                  </li>
                ) : (
                  <div></div>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
