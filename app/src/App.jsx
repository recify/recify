import { Route, Routes } from 'react-router';
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Recipe from './components/Recipe/Recipe.jsx';
import { useState } from 'react';
import Search from './components/Shared/Search.jsx';
import Recipes from './components/Recipes/Recipes.jsx';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div id="app">
      <Header />
      <Search query={searchQuery} setQuery={setSearchQuery} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:query" element={<Recipes />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
};

export default App;
