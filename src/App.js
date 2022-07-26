import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterLists from './pages/CharacterLists';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Character from './pages/Character';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<CharacterLists />} />
        <Route exact path='/:id' element={<Character />} />
        <Route exact path='/search' element={<Search />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
