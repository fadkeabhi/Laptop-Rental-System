import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"
import MyCart from './pages/MyCart';
import Home from './pages/Home';
function App() {
  return (
 
   
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/login' element={<Login />} />
           {/* <Route path='/details' element={<Details />} /> */}
      <Route path='*' element={<Errror />} />
      <Route path="/login/Home" element={<Home />} />
        <Route path="/login/Home/mycart" element={<MyCart />} />
    </Routes>
 
  );
}

export default App;
