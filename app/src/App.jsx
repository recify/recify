import { Route, Routes } from 'react-router';
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';

const App = () => {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
