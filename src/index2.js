import React from "react";
import './index.css'
import 'tachyons';

export const Card = ({id,name,email})  => {
    //const {id,name,email} = props;
    return(
            
        <div className=" tc bg-light-purple dib br3 pa3 ma3 grow  bw2shadow-5  " >
            <img  src={require(`./img/${id}.png`)}  alt="logo" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}



