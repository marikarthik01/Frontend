import React from 'react'; 
import { Link } from 'react-router-dom'; 
import useSWR from "swr" 
import axios from 'axios'; 
 
const fetcherFuntion = (url) => axios.get(url).then(res => res.data) 
 
 const ShowProducts = ({product}) => {  
    return( 
      <div className="col-md-3 container"> 
      <div className="card h-100 text-center p-4"  > 
        <img src={product?.image} class="card-img-top" alt="" height="200px" /> 
        <div className="card-body"> 
          <h5 className="card-title"></h5> 
          <p className="card-text lead fw-bold">${product?.price}</p> 
          <Link to="#" class="btn btn-outline-dark">Buy Now</Link> 
        </div> 
      </div> 
    </div>    
    );  
} 
 
const Products = () => {  
 const {data} = useSWR('http://localhost:8000/api/', fetcherFuntion) 
 console.log(data) 
  return ( 
    <div> 
      <div> 
        <div className="container product  py-5"> 
          <div className="row"> 
            <div className="col-12 mb-5"> 
              <h1 className="display-6 fw-bolder  text-center" id="new-products">Latest Products</h1> 
              <hr /> 
            </div> 
          </div> 
          <div className="row products justify-content-center"> 
       {data && data.map((med) => ( 
     <React.Fragment key={med.id}> 
       <ShowProducts product={med} /> 
     </React.Fragment> 
     ))} 
           <ShowProducts/> 
          </div> 
        </div> 
      </div> 
 
    </div>); 
} 
 
export default Products;