import React from 'react';
import logo from '../../images/logos/logo.png';
import frame from '../../images/logos/Frame.png';
import slack from '../../images/logos/slack.png';
import google from '../../images/logos/google.png';
import uber from '../../images/logos/uber.png';
import netflix from '../../images/logos/netflix.png';
import airbnb from '../../images/logos/airbnb.png';
import service1 from '../../images/icons/service1.png';
import service2 from '../../images/icons/service2.png';
import service3 from '../../images/icons/service3.png';
import carousel1 from '../../images/carousel-1.png';
import carousel2 from '../../images/carousel-2.png';
import carousel3 from '../../images/carousel-3.png';
import customer1 from '../../images/customer-1.png';
import customer2 from '../../images/customer-2.png';
import customer3 from '../../images/customer-3.png';
import './Home.css';
import { Link, Router } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <div className="bg-color">
       <div className="container"> 
         <nav class="navbar navbar-expand-lg navbar-light pt-4">
  <a class="navbar-brand" href="#">
    <img className="mr-5" style={{height: '50px'}} src={logo} alt=""/>
  </a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active mr-4">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item mr-4">
        <a class="nav-link" href="#">Our Portfolio</a>
      </li>
      <li class="nav-item mr-4">
        <a class="nav-link" href="#">Our Team</a>
      </li>
      <li class="nav-item mr-4">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      <li class="nav-item mr-4">
        <a class="nav-link text-white btn-black" href="/login">Login</a>
      </li>
      <li>
        
      </li>
    </ul>
  </div>
</nav>

<div className="row py-5">
  <div className="col-md-5 py-5">
    <h1 className="font-weight-bold">Let’s Grow Your <br/>Brand To The <br/>  Next Level</h1>
<p className="py-3">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Purus commodo ipsum duis <br/> laoreet maecenas. Feugiat </p>
<button className="btn btn-secondary btn-black">Hire Us</button>
  </div>
  <div className="col-md-7">
    <img style={{width: '100%',height: '350px'}} src={frame} alt=""/>
  </div>
</div>
         </div>
       </div>
    <div className="container py-5">
    <div className="row py-5">
  <div className="brand">
    <img src={slack} alt=""/>
    <img src={google} alt=""/>
    <img src={uber} alt=""/>
    <img src={netflix} alt=""/>
    <img src={airbnb} alt=""/>
  </div>
</div>
    </div>

    <div className="container py-5">
      <h1 className="text-center font-weight-bold mb-5">Provide awesome <span className="txt-green">services</span></h1>
    <div className="row py-5 text-center">
      <div className="col-md-4">
      <div class="card d-block" style={{width: '18rem'}}>
  <img style={{width: '50%'}} class="card-img-top" src={service1} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title font-weight-bold">Web & Mobile design</h5>
    <p class="card-text">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
  </div>
</div>
      </div>

      <div className="col-md-4">
      <div class="card d-block" style={{width: '18rem'}}>
  <img class="card-img-top" style={{width: '50%'}} src={service2} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title font-weight-bold">Graphic design</h5>
    <p class="card-text">Amazing flyers, social media posts and brand representations that would make your brand stand out.</p> 
  </div>
</div>
      </div>

      <div className="col-md-4">
      <div class="card d-block" style={{width: '18rem'}}>
  <img class="card-img-top" style={{width: '50%'}} src={service3} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title font-weight-bold">Web development</h5>
    <p class="card-text">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
  </div>
</div>
      </div>
</div>
    </div> 
    <div className="carouselBg py-5">
    <div className="container pb-5">
      <h1 className="text-white text-center py-5">Here are some of <span className="txt-green">our works</span></h1>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img style={{height: '600px'}} class="d-block w-100" src={carousel1} alt="First slide"/>
        </div>
        <div class="carousel-item">
          <img style={{height: '600px'}} class="d-block w-100" src={carousel2} alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img style={{height: '600px'}} class="d-block w-100" src={carousel3} alt="Third slide"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    </div>
    </div> 

      <div className="container py-5">
      <h1 className="text-center pt-5">Clients <span className="txt-green">Feedback</span></h1>
        <div className="row text-center py-5">
          <div className="col-md-4 mx-auto">
          <div class="card pt-4 border" style={{width: '18rem'}}>
  <img class="card-img-top mx-auto d-block" style={{width: '20%'}} src={customer1} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Nash Patrik</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
  </div>
</div>
          </div>
          <div className="col-md-4">
          <div class="card pt-4 border" style={{width: '18rem'}}>
  <img class="card-img-top mx-auto d-block" style={{width: '20%'}} src={customer2} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Miriam Baron</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
  </div>
</div>
          </div>
          <div className="col-md-4">
          <div class="card pt-4 border" style={{width: '18rem'}}>
  <img class="card-img-top mx-auto d-block" style={{width: '20%'}} src={customer3} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Bria Malon</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
  </div>
</div>
          </div>
        </div>
      </div>

      <div className="bg-color">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-md-6">
              <h2>Let us handle your project, professionally.</h2>
              <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-6">
            <form>
  <div class="form-group">
  
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address"/>
   
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Your name/company's name"/>
  </div>
  <div class="form-group">
  <textarea id="w3review" name="w3review" rows="4" cols="56" placeholder="Your message">
</textarea>
  </div>
  <a href="" className="btn-black">Send</a>
</form>
            </div>
            
          </div>
          <p className="text-center footerP">copyright Orange labs 2020</p>
        </div>
      </div>

    </div>
  
  );
};

export default Home;