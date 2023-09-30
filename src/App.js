// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Categories from './component/Categories';
import Destinations from './component/Destinations';
import Blog from './component/Blog';
import Pages from './component/Pages';
import Contact from './component/Contact';
import Dashboard from './component/Dashboard';
import Gotrip from './component/Gotrip';
import Main from './component/Main';

function App() {
  return (
    <BrowserRouter>
     <Main />
      <Routes>
        <Route exact path='/home' element={< Home />} />
        <Route exact path='/categories' element={<Categories />} />
        <Route exact path='/destinations' element={<Destinations />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/categories' element={<Categories />} />
        <Route exact path='/pages' element={<Pages />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/gotrip' element={<Gotrip />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
