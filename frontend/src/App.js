
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Footer from './components/Footer';
import LoginPopUp from './components/LoginPopUp';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';

function App() {
const [showLogin,setShowLogin] = useState(false)


  return (<>
      {showLogin? <LoginPopUp setShowLogin={setShowLogin} />: <></>}
    <div className="app">
      <Navbar  setShowLogin={setShowLogin}/>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/cart' element={<Cart />} />
       <Route path='/order' element={<PlaceOrder />} />
       <Route path='verify' element={<Verify />} />
       <Route path='/myorders' element={<MyOrders />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
