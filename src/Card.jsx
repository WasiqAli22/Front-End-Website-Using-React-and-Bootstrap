import React from 'react';
import Sdata from "./Sdata";
import { NavLink } from "react-router-dom";


const Card = (props) => {
    return (
        <>
      
        
                <div className="col-md-4 col-10 mx-auto ">

                  <div class="card" >
                    <section >
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold">
                          {
                              props.title
                          }
                      </h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <NavLink to= "" class="btn btn-primary" > Go to {props.title}

                      </NavLink>
                    </div>
                    </section>
                  </div>                               
                </div>

               
         

      
        </>
    );
};

export default Card;