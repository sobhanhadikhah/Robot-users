import React from "react";
import './index.css'
import 'tachyons';
//making card
export const Card = ({id,username,email})  => {
    //const {id,name,email} = props;
    return(           
        <div className=" tc bg-light-purple dib br3 pa3 ma3 grow  bw2 shadow-5  " >
            <img  /* src={require(`./img/${id}.png`)} */ src= {`https://robohash.org/${id}`} alt="logo"   />
            <div>
                <h2>{username}</h2>
                <p>{email}</p>
                <div className="tl" >
                <button className="black bg-orange br4  pointer pa2 grow  hover-bg-dark-pink " >Learn more</button>

                </div>
            </div>
        </div>

    );
};





