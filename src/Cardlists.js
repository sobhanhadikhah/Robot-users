import React from "react";
//import { Users_Face } from "./database-normal";
import { Card } from "./index2";
//listing a file 
export const Cardlist = ({Arraylist})=>{
      
      return(
            <div>
                  {
                   Arraylist.map((users,i)=>{
                        return (  <Card
                                          key={i}
                                          id = {Arraylist[i].id}
                                          username = {Arraylist[i].username}
                                          email= {Arraylist[i].email} 
                              />)
                   })               
                  }
            </div>
          )
    
  };

//export default Cardlist;