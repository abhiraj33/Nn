import './App.css';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AboutUs from './components/AboutUs';
import Menu from '@mui/icons-material/Menu';
import Chinese from './components/Chinese';
import Indo from './components/Indo'
import Home from './components/Home';
import { Dashboard } from '@mui/icons-material';
import Promotions from './components/Promotions';
import SpecialOffers from './components/SpecialOffers';
import WishList from './components/WishList';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <Routes>
        &nbsp; &nbsp;
      <Route path='/Homepage' element={<Homepage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/> 
      <Route path='/Menu' element={<Menu/>}/>  
      <Route path='/Chinese' element={<Chinese/>}/>    
      <Route path='/Indo' element={<Indo/>}/>    
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Promotions' element={<Promotions/>}/>
      <Route path='/SpecialOffers' element={<SpecialOffers/>}/>
      <Route path='/WishList' element={<WishList/>}/>
      
      </Routes>
    </div>
  )
}
   

export default App;
