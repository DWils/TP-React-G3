import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryProducts from "./pages/Search/categoryProducts";
import './assets/css/App.css';
import Product from "./pages/ProductDetail/Product";

function App() {




  return (


    <div className='App'>

      {/* La navbar sera composé de plusieurs routes  */}
     
      <Header/>
      {/* <Routes> : Creation du groupe des routes  */}
      <Routes>

        {/* <Route>: creation de chaque Route  */}
        {/* path: c'est le chemin à charger */}
        {/* element={<Home/>} : va charger le composant/element Home, qui est enfant de App. */}
        <Route path="/" element={<Home />} />
        
        <Route path="/category/:category" element={<CategoryProducts />} />

        <Route path='/product/:id' element={<Product/>} />

        <Route path="/login" element={<Login />} />

        <Route path="/SignUp" element={<SignUp/>} />

        <Route path="/Cart" element={<Cart/>} />

      </Routes>
      <Footer/>


    </div >

  )

};

export default App
