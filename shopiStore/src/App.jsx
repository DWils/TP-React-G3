import { Routes, Route } from "react-router-dom";
import {useState} from "react";
import Home from './pages/Home';
import Login from "./pages/Login/index2";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryProducts from "./pages/Search/categoryProducts";
import './assets/css/App.css';
import Product from "./pages/ProductDetail/Product";


import Profile from "./pages/Login/Profile";
import Payment from "./pages/Payment/Payment";

function App() {


  const [count, setCount] = useState(0);

  const handleCounter =()=>{
    // console.log(++count);
    setCount(count+1)
  }


  return (


    <div className='App'>

      {/* La navbar sera composé de plusieurs routes  */}
     
      <Header count={count} />
      {/* <Routes> : Creation du groupe des routes  */}
      <Routes>

        {/* <Route>: creation de chaque Route  */}
        {/* path: c'est le chemin à charger */}
        {/* element={<Home/>} : va charger le composant/element Home, qui est enfant de App. */}
        <Route path="/" element={<Home />} />
        
        <Route path="/category/:category" element={<CategoryProducts />} />

        <Route path='/product/:id' element={<Product count={count} setCount={setCount}/>} />
         
        <Route path="/login" element={<Login />} />
        <Route path ="/profile/:id" element ={<Profile/>}/>
        <Route path="/SignUp" element={<SignUp/>} />

        <Route path="/Cart" element={<Cart/>} />
        <Route path = "/Payment" element={<Payment/>}/>

        <Route path="/forgetpassword" element ={<SignUp/>} />
       
     
      </Routes>
      <Footer/>


    </div >

  )

};

export default App
