import axios from 'axios';
import React from 'react';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail=() => {



    const [product,setProduct] = useState("")

    const {id} = useParams();

    const getSingleProduct= async () => {
        const { data }=await axios.get(`http://localhost:8000/api/${id}`)
        console.log(data)
        setProduct(data)
    }
    
    useEffect(() => {
     getSingleProduct();
    }, []);
    



  return (
     <div> 

    </div>
    );
}

export default ProductDetail;
