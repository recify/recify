import './Search.styles.css';

const Search = ({ query, setQuery }) => {
  return (
    <input
      className="search-bar"
      value={query}
      placeholder="Search for a recipe"
      onChange={(e) => setQuery(e.target.value)}
      aria-label="Search Bar"
    />
  );
};

export default Search;
