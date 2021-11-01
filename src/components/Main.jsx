import React from "react";
import "../App.css"
import img1 from "../images/for-4.jpg"
import img2 from "../images/for-2.jpg"
function Main() {
  return (
<>
<section className="main">
  <div className="container">
  <div className=" row main-height align-items-center align-content-center ">
  <div className="col-lg-5 col-12 my-lg-0 my-5 py-5 py-lg-0">
     <h1  className="text-capitalize fw-bold fs-1">Online Payment made esay for you</h1>
     <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ullam culpa magnam sed modi vel praesentium soluta magni necessitatibus ab sapiente molestiae, aperiam harum, repellat id accusamus mollitia dolore perspiciatis?</p>
   <div className="search ">
    <p> Get early access for you</p>
    <div className="input-a">
<input type="text" className="input py-2 px-4 w-100  shadow-sm"  placeholder="Enter Your Email"/>
<button className="btn  my-btn shadow-none">search</button>
</div>
   </div>
    </div>
    <div className="col-lg-7 col-12 text-center lf my-lg-0 my-5 py-5 py-lg-0 ">
<img src={img2} className="img-fluid shadow-lg bg-img " alt="gg" />
<img src={img1} className="img-fluid shadow-lg ag-img" alt="gg" />
</div>
    </div>
  </div>
</section>
</>
);
}
export default Main;

