import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Article from './Article';


const Home = () => {

  const [catégory, setCatégory] = useState([])

useEffect(() => {

axios.get('https://fakestoreapi.com/products/categories')
.then((response) => 

{setCatégory(response.data)

})



.catch((error) => {console.log(error)});

},[]);




  return (
  <div className='affiche'>
      <h2 className='titre'>Catégories</h2>

   
     {catégory.length !== 0 && (
                       <ul className="poster"> 
                            {catégory.map((cat) => (
                                <li key={cat}>{cat}</li>
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