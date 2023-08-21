import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'


const Article = () => {

    const [Articles, setArticles] = useState([])

    useEffect(() => {

axios.get('https://fakestoreapi.com/products?sort=desc')


.then((response)=>setArticles(response.data))

.catch((error) => console.log(error));

},[])



  return (
    <div>
      <h2 className="note">Les articles les mieux notés</h2>
      <ul className="chaine">
      
        {Articles
        .sort((a,b)=>b.rating-a.rating)
        .slice(0,3)
        .map((article) => (
          <li key={article.id}>
            <img src={article.image} alt={article.title} />
            {/* <p>{article.title}</p> */}
            {/* <p>{article.price} €</p> */}
          </li>
        ))}
     
       </ul>
    </div>
  )
}

export default Article;

