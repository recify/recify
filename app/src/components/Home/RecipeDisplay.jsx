import { Link } from 'react-router';
import './RecipeDisplay.styles.css';

const RecipeDisplay = ({ name, image, id, recipeDetails }) => {
  return (
    <Link
      className="recipe-display"
      to={`/recipe/${id}`}
      state={{ recipeDetails: recipeDetails }}
    >
      <img
        className="recipe-display-image"
        src={image}
        alt={`Image of ${name}`}
      />
      <h3 className="recipe-display-title">{name}</h3>
    </Link>
  );
};

export default RecipeDisplay;
