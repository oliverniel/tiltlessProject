import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import taustaBannerRajattu from './components/assets/taustaBannerRajattu.jpg';



function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/allProducts' element={<ShopCategory banner={taustaBannerRajattu} category="allProducts"/>}/>
        <Route path='/newClubs' element={<ShopCategory banner={taustaBannerRajattu} category="newClubs"/>} />
        <Route path='/usedClubs' element={<ShopCategory banner={taustaBannerRajattu} category="usedClubs"/>} />
        <Route path='/balls' element={<ShopCategory banner={taustaBannerRajattu} category="balls"/>} />
        <Route path="product" element={<Product/>}>
          <Route path=":id" element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
 