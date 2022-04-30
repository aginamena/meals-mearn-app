
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ViewCategory from './components/ViewCategory';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/viewcategory/:name' element={< ViewCategory />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
