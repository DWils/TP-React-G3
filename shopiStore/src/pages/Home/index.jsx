import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Article from './Article';
import { useNavigate } from 'react-router-dom';
import CategoryProducts from '../Search/categoryProducts';

// import {Women} from '../../assets/img/Women.png';
// import {Men} from '../../assets/img';
// import {jewelery } from '../../assets/img';
// import {gamer} from '../../assets/img';



const Home = () => {

  const [catégory, setCatégory] = useState([])

const navigate = useNavigate(CategoryProducts)

  

useEffect(() => {

axios.get('https://fakestoreapi.com/products/categories')
.then((response) => 

{setCatégory(response.data)

})



.catch((error) => {console.log(error)});

},[]);

const handleClick=(category)=>{
  navigate(`/category/${category}`);

}
// const CategorieImage = ({ cat }) => {
//   switch (cat) {
//     case "women's clothing":
//       return <img src= {Women} width= "50%" alt="Women's Clothing"></img>

//     case "jewelery":
//       return <img src={jewelery} alt="Jewelery"></img>;

//     case "men's clothing":
//       return <img src={Men} alt="Men's Clothing"></img>;

//     case "electronics":
//       return <img src={gamer} alt="Electronics"></img>;

//     default:
//       break; 
//   }
// }

  return (
  <div className='affiche'>
      <h2 className='titre'>Catégories</h2>

     {catégory.length !== 0 && (
       
                        <ul className="poster"> 
                            {catégory.map((cat) => (
                                <li key={cat} onClick={()=>handleClick(cat)}>{cat}</li>
                            ))}
                        </ul>
     )}

     <div className="article">
                              <Article/>
     </div>
  
    </div>

  )
}

export default Home