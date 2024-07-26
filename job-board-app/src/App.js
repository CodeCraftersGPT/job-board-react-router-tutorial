import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import NotFound from './Components/NotFound';



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
