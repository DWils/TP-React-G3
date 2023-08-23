import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from './pages/Home';
import Login from "./pages/Login/index2";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Profile from "./pages/Login/Profile";
import './assets/css/Login.css'

// import './App.css'

function App() {



  return (


    <div className='App'>

      {/* La navbar sera composé de plusieurs routes  */}
      <Navbar />

      {/* <Routes> : Creation du groupe des routes  */}
      <Routes>

        {/* <Route>: creation de chaque Route  */}
        {/* path: c'est le chemin à charger */}
        {/* element={<Home/>} : va charger le composant/element Home, qui est enfant de App. */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/SignUp" element={<SignUp/>} />

        <Route path ="/login/:profile" element ={<Profile/>}/>

        <Route path="/Cart" element ={<Cart/>} />

        <Route path="/Profile" element ={<Profile/>} />

      </Routes>   


    </div >

  )

};

export default App
