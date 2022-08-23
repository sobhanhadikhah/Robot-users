import React from "react";
import { Cardlist } from "./Cardlists";
import SearchBox from './SearchBox';
import {Users_Face} from './database-normal';
export const App = ()=>{
    return(
        <div>
                <SearchBox/>
                <Cardlist Arraylist = {Users_Face} />
        </div>
    

    )
}