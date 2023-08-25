import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CategoryComents from './categoryComents';
import CategoryPrice from './categoryPrice';
import { useNavigate } from 'react-router-dom';


const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filterChecked, setFilterCheked] = useState(false);
  const navigate = useNavigate();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const fetchProducts = (category) => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then((response) => {
      if (response.data) {
        setProducts(response.data);
      }
    })
    .catch((error) => console.log(error));
    setFilterCheked(false);
  }

  const displayFilterChecked = 

  useEffect(() => {

   fetchProducts(category)
  }, [category]);

  const handlePriceFilter = (min, max) => {
    const filtered = products.filter(product => product.price >= min && product.price <= max);
    setSelectedPriceRange({ min, max });
    setFilteredProducts(filtered);
    setFilterCheked(true);
  };

  const displayProducts = selectedPriceRange ? (
    filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <div key={product.id} className="product">
          <div className="image">
            <img src={product.image} alt={product.title} onClick={() => handleProductClick(product.id)} />
          </div>
        </div>
      ))
    ) : (
      <span className="span">
        <p>Pas de produits dans notre magasin à ce prix</p>
      </span>
    )
  )
  
  : (
    products.map((product) => (
      <div key={product.id} className="product">
        <div className="image">
          <img src={product.image} alt={product.title}/>
        </div>
      </div>
    ))
  );

// console.log(displayProducts);

  // const handleclick=(id)=>{
  //   navigate(`/product/${id}`);

  //   onClick={() => handleProductClick(product.id)}

  // }
  return (


    <div className='ro'>

      <h2 className='catProduct'>{filterChecked ? filteredProducts.length : products.length} Résultats pour : Catégorie : {category}</h2>

      <div className="function">
        <div className="productByid">
        <div className="coments">

          <CategoryComents selectCategorie={category}  />
        </div>
        <div className="prixcat">
          <CategoryPrice selectCategorie={category} onPriceFilter={handlePriceFilter} selectedPriceRange={selectedPriceRange}   />
        </div>
        </div>
        <div className="product-list">
          {displayProducts}
        </div>
      </div>
      
    </div>
  );
};

export default CategoryProducts;
