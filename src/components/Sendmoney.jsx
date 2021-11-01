import React, { useState } from 'react'
import money from './money';
const Sendmoney = () => {
       const[moneydata, setmoneydata] = useState(money);
    return (
        <>
        <section className="about my-5 py-5">
        <div className="container">
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h1 className="fw-bold">What I Do</h1>
                </div>
            </div>
            <div className="row py-5  ">
{ moneydata.map( (cruntmoney)=>{
    const{id, info, title, logo} = cruntmoney;
    return(
        <>
  <div className="col-md-6 col-lg-4 mb-4 ">
                    <div className="sevice box-bg shadow rounded  py-3  px-5">
                        <div className="icons">
                            <i className={`icon ${logo}`}></i>
                        </div>
                        <div className="content">
                            <h5 className="py-3">{title}</h5>
                            <p className="text-muted">{info}</p>
                        </div>
                    </div>
                </div>
        </>
    )
})
              
}

            </div>


      
        </div>
    </section>
        </>
    );
}

export default Sendmoney;
