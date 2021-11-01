import React, { useState } from 'react'
import useapp from './useapp_api'
import img3 from "../images/pay.jpg"
import img4 from "../images/for-2.jpg"
const Use = () => {
    const[usedata, setusedata] = useState(useapp);
    return (
        
        <>
            <section className="useapp">
                <div className="container my-5 ">
                    <div className="row">
                        <div className="col-md-5 col-12  my-md-0 my-5">
                       <img src={img3} className="img-fluid   useimg" alt="dd" />
                        </div>
                        <div className="col-md-7 col-12">
                        <h6>--AVAILABLE @ FOOFLE AND IOS APP STORE ONLY</h6>
                        <h4>How to use the App?</h4>
                        <div className="row d-flex">

                            {usedata.map( (curntdata)=>{
                              const{id,title, info} = curntdata;
                            return(
                                <>
 {/* main */}
 <div className="col-12 d-flex py-2">
                            <div className="num">
                            <p className="cust me-5">{id}</p>
                            </div>
                      

                               <div className="icons">
        
                                  <h5 className="fw-bolder">{title}</h5>
                                  <p className="text-muted">{info}</p>
                               </div>
                                </div>
                           {/* ends */}
                                </>
                            )
                            })}
                           
                           
                            
                        </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                        <button className="btn btn rounded-pill btn-c">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* /* 2 part is  */ }
            <section className="useapp">
                <div className="container my-5 py-5 ">
                    <div className="row">
                        <div className="col-md-7 col-12">
                        <h6>--SUPPORT IN ANY LANGUAGE</h6>
                        <h4>World class support is<br></br>available 24/7</h4>
                        <div className="row d-flex">

                            {usedata.map( (curntdata)=>{
                              const{id,title, info} = curntdata;
                            return(
                                <>
 {/* main */}
 <div className="col-12 d-flex py-2">
                            <div className="num">
                            <p className="cust me-5">{id}</p>
                            </div>
                      

                               <div className="icons">
        
                                  <h5 className="fw-bolder">{title}</h5>
                                  <p className="text-muted">{info}</p>
                               </div>
                                </div>
                           {/* ends */}
                                </>
                            )
                            })}
                           
                           
                            
                        </div>
                        </div>
                        <div className="col-md-5 col-12 text-center">
                       <img src={img4} className="img-fluid useimg my-md-0 my-5" alt="dd" />
                        </div>
                    </div>
                    <div className="row justify-content-start ms-5">
                        <div className="col-12 text-center">
                        <button className="btn btn rounded-pill btn-c">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Use
