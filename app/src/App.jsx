import { Route, Routes } from 'react-router';
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Recipe from './components/Recipe/Recipe.jsx';
import Recipes from './components/Recipes/Recipes.jsx';
import SearchContextProvider from './context/SearchContextProvider.jsx';

const App = () => {
  return (
    <div id="app">
      <Header />

      <SearchContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:query" element={<Recipes />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </SearchContextProvider>
    </div>
  );
};

export default App;
