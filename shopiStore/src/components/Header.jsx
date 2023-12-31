import React from 'react'
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import {NavLink} from 'react-router-dom';




const Header = ({count}) => {
    const [searchValue, setSearchValue] = useState("")

    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();
    
    const [selectCategorie, setSelectCategorie] = useState(null);

    useEffect(() => {
        if (searchValue.trim() !== ""){
            axios.get('https://fakestoreapi.com/products')
                .then((response) => {
                    if (response.data) {
                        setCategories(response.data);
                    }
                })
                .catch((error) => console.log(error));
        } else {
            setCategories([]);
        }
      }, [searchValue]);
    


    const handleChange = (e) => {

        setSearchValue(e.target.value)
};

const handleCategoryClick = (id) => {
    navigate(`/product/${id}`);

    // navigate(`/category/${category}`);
    // setSelectCategorie(category);
    setSearchValue("");
  };

  const filteredCategories = categories.filter((category) =>
  category.title.toLowerCase().includes(searchValue.toLowerCase())
 
); 
    return (
        <div className="header">

            <div className="first">
            <NavLink to="/"><img className='p-6 md:p-10 lg:p-13 xl:p-12' src='shopistore_logo1.png' alt="Logo de mon application"/></NavLink>  
                
                <div className="search">
                    <input type="text" placeholder='serach' value={searchValue} onChange={handleChange} />
                    <FaSearch size={25} className='loup' />
                   
                    {searchValue !== '' && (
            <ul className="suggestions absolute top-12 bg-gray-100  mt-0 flex h-auto justify-items-start justify-end text-xl">
            {filteredCategories.map((product, index) => (
                
                <li key={index} onClick={() => handleCategoryClick(product.id)} className='flex justify-start cursor-pointer'>
                    {product.title}
                </li>
            ))}
        </ul>
        
        )}
                    {/* {searchValue.trim() !== '' && (
                        <ul className="suggestions">
                        {filteredCategories
                        .map((category) => (
                          <li key={category} onClick={() => handleCategoryClick(category)}>
                            {category}
                          </li>
                        ))}

                      </ul>
                    )} */}

                </div>
               

            </div>
            <div className="second">
            <li><NavLink to="/login"><button className='text'>connectez-vous</button></NavLink></li> 
                
            </div>
            <div className="third">
            <NavLink to="/Cart" className="relative"><FaShoppingCart size={35} className='panier' /><div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{count}</div></NavLink>
            </div>
        </div>
    )
}

export default Header