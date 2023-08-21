import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryPrice = ({ selectCategorie }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [priceCategories, setPriceCategories] = useState([
    { label: 'Jusqu\'à 20 euros', min: 0, max: 20 },
    { label: '20 à 50 euros', min: 20, max: 50 },
    { label: '50 à 100 euros', min: 50, max: 100 },
    { label: '100 à 200 euros', min: 100, max: 200 },
    { label: '200 à 500 euros', min: 200, max: 500 },
    { label: '500 euros et plus', min: 500, max: Infinity }
  ]);

  useEffect(() => {
    if (selectCategorie) {
      axios.get(`https://fakestoreapi.com/products/category/${selectCategorie}`)
        .then((response) => {
          setCategoryProducts(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [selectCategorie]);

  const filterProductsByPrice = (min, max) => {
    return categoryProducts.filter(product => product.price >= min && product.price <= max);
  };

  return (
    <div>
      <ul className="category-prices com" >
        {priceCategories.map((category, index) => (
          <li key={index}>
            <label className='labchek'>
              <input type="checkbox" name="" id="" />
            {category.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPrice;
