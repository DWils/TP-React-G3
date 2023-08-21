import React from 'react'
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import {NavLink} from 'react-router-dom';




const Header = () => {
    const [searchValue, setSearchValue] = useState("")

    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    const [selectCategorie, setSelectCategorie] = useState(null)

    useEffect(() => {
        if (searchValue.trim() !== "") {
            axios.get('https://fakestoreapi.com/products/categories')
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

const handleCategoryClick = (category) => {

    navigate(`/category/${category}`);
    setSelectCategorie(category);
  };

  const filteredCategories = categories.filter((category) =>
  category.toLowerCase().includes(searchValue.toLowerCase())
);
    return (
        <div className="header">

            <div className="first">
            <NavLink to="/"><img className='i' src='shopistore_logo1.png' alt="Logo de mon application" width="100px" /></NavLink>  
                
                <div className="search">
                    <input type="text" placeholder='serach' value={searchValue} onChange={handleChange} />
                    <FaSearch size={25} className='loup' />
                   
                    {searchValue.trim() !== '' && (
                        <ul className="suggestions">
                        {filteredCategories
                        .map((category) => (
                          <li key={category} onClick={() => handleCategoryClick(category)}>
                            {category}
                          </li>
                        ))}

                      </ul>
                    )}

                </div>
               

            </div>
            <div className="second">
            <li><NavLink to="/login"><button className='text'>connectez-vous</button></NavLink></li> 
                
            </div>
            <div className="third">
               <NavLink to="/Cart" ><FaShoppingCart size={35} className='panier' /></NavLink> 
            </div>
        </div>
    )
}

export default Header