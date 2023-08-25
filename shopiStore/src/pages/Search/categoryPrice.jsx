import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryPrice = ({ selectCategorie,onPriceFilter, selectedPriceRange}) => {
  const [categoryProducts, setCategoryProducts] = useState([]);


  const [filteredProducts, setfilteredProducts] = useState([selectCategorie])

  const [priceCategories, setPriceCategories] = useState([
    { label: 'Jusqu\'à 20 euros', min: 0, max: 20 },
    { label: '20 à 50 euros', min: 20, max: 50 },
    { label: '50 à 100 euros', min: 50, max: 100 },
    { label: '100 à 200 euros', min: 100, max: 200 },
    { label: '200 à 500 euros', min: 200, max: 500 },
    { label: '500 euros et plus', min: 500, max: Infinity }
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    if (selectCategorie) {
      axios.get(`https://fakestoreapi.com/products/category/${selectCategorie}`)
        .then((response) => {
          setCategoryProducts(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [selectCategorie]);

  // const handleCategoryClick = (category) => {
  //   setSelectedCategory(category);
  //   onPriceFilter(category.min, category.max);
  // };


  // const handleClick = (selectedCategory) => {
  //   console.log("verification", selectedCategory);
  //   const filtered = filterProductsByPrice(selectedCategory.min, selectedCategory.max);
  //   console.log("Filtered products:", filtered);
  //   setfilteredProducts(filtered);
  // };
  
  // const [checked, setChecked] = useState(false); 
  // handleChange = (e) => {
  //   setChecked(e.target.value);
  // }
  return (
    <div>
    
      <ul className="category-prices com" >
      <h2 className='pr'>Prix</h2>
        {priceCategories
        .map((category, index) => (
          <li key={index}>
            
            <label className='labchek'>
              <input  type="checkbox" 
              // onChange={handleChange}
             
              // checked={selectedPriceRange && selectedPriceRange.min === category.min && selectedPriceRange.max === category.max}
              onClick={() => onPriceFilter(category.min, category.max)}
               name="" id="" className='ch'/>
            {category.label}
            </label>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default CategoryPrice;
