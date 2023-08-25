import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';


const categoryComents = ({ selectCategorie }) => {

    const [coments, setComents] = useState([])
    // const [filteredProducts, setFilteredProducts] = useState([null]);
   


    useEffect(() => {
        if (selectCategorie) {
            axios.get(`https://fakestoreapi.com/products?sort=desc`)
                .then((response) => {
                    // const filteredComments = response.data
                    //     .filter(product => product.category === selectCategorie);
                    // setComents(filteredComments);
                    setComents(response.data);
                  
                })
                .catch((error) => console.log(error));
        }
    }, [selectCategorie]);

//     const [selectedStar, setSelectedStar] = useState([...filteredComments.map(comment => comment.rating.rate)]);
// console.log(filteredComments);

    const handleclick = (star) => {
       alert(handleclick)
    }
  
// console.log(filteredComments);
        // //manipuler le state
const copyComents = [...coments]
// console.log(copyComents);
  const filterCopyComents=coments.filter(coment => coment.category === selectCategorie);
    //  const filterCopyComentsAbdated = filterCopyComents.filter(filterCopyComent=>filterCopyComent.rating.rate !== filterCopyComent.id ) 
       console.log(filterCopyComents);

// filterCopyComents.rating.rate
// const filteredComments = filterCopyComentsAbdated.filter(comment =>
//     comment.category === selectCategorie && comment.rating.rate >= selectedStar
// );

    //    console.log(filterCopyComentsAbdated);
        // //modifier le state
        // setTriStar(triStarcopyAbdated);

    
    const arrayStars = [4,3,2,1];
//     const filteredProducts = selectedStar
// ? products.filter(product => Math.floor(product.rating.rate) === selectedStar)
// : products;

    // const filteredComments = selectedStar
    //     ? coments.filter(comment => comment.rating === selectedStar)
    //     : coments;

    return (
        <div className='comments-container'>
            <ul className='com'>
                <h2 className='paragraph'>Commentaire client</h2>
                {arrayStars.map((star) =>
                <li key={star} onClick={handleclick}>
                    <StarRatings
                                    rating={star}
                                    starRatedColor="gold"
                                    starEmptyColor="lightgrey"
                                    starDimension="20px"
                                    starSpacing="1px"
                                /><p className='p'>&amp;plus</p>
                </li>
                
                )
            
                }
                        
        
            </ul>
        </div>
    )
}

export default categoryComents;