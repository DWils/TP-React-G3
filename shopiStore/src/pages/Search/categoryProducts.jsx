import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CategoryComents from './categoryComents';
import CategoryPrice from './categoryPrice';
import { useNavigate } from 'react-router-dom';


const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        if (response.data) {
          setProducts(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, [category]);

  const handleclick=(id)=>{


    
    navigate(`/product/${id}`);

  }
  return (


    <div className='ro'>

      <h2 className='catProduct'>{products.length} Résultats pour : Catégorie : {category}</h2>

      <div className="function">
        <div className="productByid">
        <div className="coments">

          <CategoryComents selectCategorie={category} />
        </div>
        <div className="prixcat">
          <CategoryPrice selectCategorie={category} />
        </div>
        </div>
        <div className="product-list">
          {products
            .map((product) => (
              <div key={product.id} className="product">
                <div className="image" >
                  <img src={product.image} alt={product.title}  onClick={()=>handleclick(product.id)}/>
                </div>
              </div>


            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
