import { NavLink } from 'react-router';
import './RecipeDisplay.styles.css';

const RecipeDisplay = ({ name, image, id }) => {
  // On click, navigate to the Recipe page.
  return (
    <NavLink className="recipe-display" to={`/recipe/${id}`}>
      <img
        className="recipe-display-image"
        src={image}
        alt={`Image of ${name}`}
      />
      <h3 className="recipe-display-title">{name}</h3>
    </NavLink>
  );
};

export default RecipeDisplay;
