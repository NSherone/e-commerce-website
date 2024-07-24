import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import banner from './Components/Assets/banners.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/gifts' element={<ShopCategory banner={banner} category="gifts"/>}/>
        <Route path='/pastries' element={<ShopCategory banner={banner}  category="baked_items"/>}/>
        <Route path='/items' element={<ShopCategory banner={banner} category="items"/>}/>
        <Route path='/events' element={<ShopCategory banner={banner} category="events"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route  path=':productId' element={<Product/>}/>
       </Route>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/Login' element={<LoginSignup/>}/>
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;