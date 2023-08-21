import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';


const categoryComents = ({ selectCategorie }) => {

    const [coments, setComents] = useState([])

    useEffect(() => {
        if (selectCategorie) {
            axios.get(`https://fakestoreapi.com/products?sort=desc`)
                .then((response) => {
                    const filteredComments = response.data.filter(comment => comment.category === selectCategorie);
                    setComents(filteredComments);
                })
                .catch((error) => console.log(error));
        }
    }, [selectCategorie]);




    return (
        <div className='comments-container'>
            <ul className='com'>
                {coments

                    .map((coment) => (
                        <li className='classe' key={coment.id}>
                            <div className="star-rating-container">
                                <StarRatings
                                    rating={coment.rating.rate}
                                    starRatedColor="gold"
                                    starEmptyColor="lightgrey"
                                    starDimension="10px"
                                    starSpacing="0px"
                                /><p className='p'>&amp;plus</p>

                            </div>





                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default categoryComents