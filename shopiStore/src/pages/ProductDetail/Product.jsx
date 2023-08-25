import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = ({count,setCount}) => {
  const { id } = useParams();
  const [infos, setInfos] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setInfos(response.data); 
        // console.log(infos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // console.log("Infos:", infos)

  return (
    <div className='produit'>
      {infos && Object.keys(infos).length > 0 ? (
        <>
          
          <h2 className='font-bold text-2xl flex justify-center justify-items-center'>{infos.title}</h2>
          <div className="flex space-x-20 py-6 m-5  justify-between">
          <img className=' max-w-full h-auto bg-blue-300 py-6 px-4 border rounded 1px;' src={infos.image} alt={infos.title} />
          <p className='mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400 '>{infos.description}</p>
          </div>
          <div className="flex justify-items-center flex-col">
          <h3 className="flex justify-center">Prix : {infos.price}€</h3>
          <button className='bg-blue-400 active:bg-blue-500 hover:bg-blue-700 m-4 rounded py-2 px-4 text-white font-bold flex justify-center' onClick={()=> setCount(count + 1)}>Ajouter au panier</button>
        </div>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default Product;
