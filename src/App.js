import './App.css';
import Navigation from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/home';
import About from './About/about';
import Project from './Project/project';
import Contact from './Contact/Contact';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navigation />
<Routes>
<Route path='/' element={<Home/>}></Route>
    <Route path='about' element={<About Value={10}/>}></Route>
    <Route path='project' element={<Project/>}></Route>
    <Route path='contact' element={<Contact/>}></Route>
    </Routes>
</BrowserRouter> 

    
    </div>
  );
}
export default App;
