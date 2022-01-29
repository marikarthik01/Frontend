import React from 'react';
import {useState,useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import useSWR from "swr" 
import axios from 'axios'; 
import {Link } from 'react-router-dom';
 

function News() {

//    const response=fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=22bf55054b284e3dacc3bf95162d2469");
//    const result = response.json();
//    console.log(result);
//    console.log(result.articles);


    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=22bf55054b284e3dacc3bf95162d2469');
           
              const  res = await response.json()
                console.log(res);
                const data = res.articles;
                console.log(data);
            }
        getProducts();
    }, [])

    // const fetcherFuntion = (url) => axios.get(url).then(res => res.data);
    // const {data} = useSWR('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=22bf55054b284e3dacc3bf95162d2469', fetcherFuntion) 
    // console.log(data.articles);

    const ShowProducts = ({product}) => {  
        return( 
          <div className="col-md-3 container"> 
          <div className="card h-100 text-center p-4"  > 
            <img src={product?.urlToImage} class="card-img-top" alt="" height="200px" /> 
            <div className="card-body"> 
              <h5 className="card-title">{product?.title}</h5> 
              <p className="card-text lead fw-bold">$</p> 
              <Link to="#" class="btn btn-outline-dark">Buy Now</Link> 
            </div> 
          </div> 
        </div>    
        );  
    } 
    
  return (
  <div>
      <h1>Health News</h1>
      {/* {this.data && this.data.map((med) => ( 
     <React.Fragment key={med.id}> 
       <ShowProducts product={med} /> 
     </React.Fragment> 
     ))}  */}

  </div>
  );  
  
}

export default News;
