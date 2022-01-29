import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';
import Background from '../../assets/medicine.jpg';
import Background2 from '../../assets/covid.png';
import Background3 from '../../assets/Deals.png';

function Home() {
    return (
        <div className="hero">
            <div>
                <form className="form-outer">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search Products here...." aria-label="Search" />
                    <button className="btn  btn-outline-dark my-sm-0 " id="search" type="submit"><i className="fa fa-search me-1"></i></button>
                </form>
                <Link to="" className="btn btn-outline-dark ms-2  cart ">
                <i className="fa fa-shopping-cart me-1"></i> Cart(0)</Link>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Background} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Background2}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Background3}  class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>);
}

        export default Home;
