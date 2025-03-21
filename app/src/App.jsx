import { Route, Routes } from 'react-router';
import Home from './components/Home/Home.jsx';

const App = () => {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
