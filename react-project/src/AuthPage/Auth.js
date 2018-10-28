import React, { Component } from 'react';
import Signup from "./Signup";
import Login from "./Login";

//The component to switch between Signup and Login;

class Auth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signup: false,
            login:true
        };

        this.switch = this.switch.bind(this);

    }


    switch(word){
        var signup = true
        var login = true
        if(word === "signup"){signup = true;login = false;}
        else{login = true; signup = false;}
        this.setState({login:login,signup:signup})
        return

    };
        render(){


            return (
                <div className= "auth">
                    <div className="label-div">
                        <p  onClick={this.switch.bind(null,"signup")} className={this.state.signup ? "label-style-1":"label-style-2"}>SIGN UP</p>
                        <p  onClick={this.switch.bind(null,"login")} className={this.state.login ? "label-style-1":"label-style-2"}> LOGIN</p>
                    </div>

                    { this.state.signup?<Signup/> : null}
                    {this.state.login? <Login /> : null}

                </div>

            )


        }
};

export default Auth;