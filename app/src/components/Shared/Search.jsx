import { useNavigate } from 'react-router';
import './Search.styles.css';
import { useContext } from 'react';
import SearchContext from '../../context/SearchContext.js';

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/recipes/${query}`);
  };

  return (
    <div className="search-container">
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          value={query}
          placeholder="Search for a recipe"
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search Bar"
          required
        />
      </form>
    </div>
  );
};

export default Search;
