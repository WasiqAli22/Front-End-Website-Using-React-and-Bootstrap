import React from 'react';
import { NavLink } from 'react-router-dom';
import hometheme from "../src/home.jpg";

const Common = (props) => {
    return (
        <>
        <section id="header" className="section">
          <div className="container-fluid ">
            <div className='row'>
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                     {props.name}
                     <h1></h1>
                     <strong className="brand-name"> BidnBuy.pk</strong>

                      <h2 className="my-3">
                      We are the team of talented developer
                      </h2>
                      <div className="mt-3" >
                    <NavLink to={props.visit} className="btn-get-started ">
                        {props.btnname}
                        </NavLink>
                      </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img src={props.imgsrc} className="img-fluid animated" alt="img" width="650px"/>
                    </div>
                  
                  </div>
                </div>
            </div>
          </div>
        </section>

        </>
    );
};

export default Common;