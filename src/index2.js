import React from "react";
import './index.css'
import 'tachyons';

class Login extends React.Component{
    render(){
        return(
            <div className="tc orange " >
                <h1 >Log in</h1>
                <p>join us</p>
                <input type='text' placeholder="text" className="" />
            </div>
        )
    }
}
export default Login;