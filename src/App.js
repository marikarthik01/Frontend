
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import News from './Components/News/News';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Navbar />} />
       <Route path="home" element={ <Home />} />
       <Route path="products" element={ <Products />}/>  
       <Route path="news" element={ <News />} />    
       <Route path="login" element={ <Login />} />
       <Route path="register" element={ <Register />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
