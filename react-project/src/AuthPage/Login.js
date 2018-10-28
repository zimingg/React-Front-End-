import React from 'react';
import Prompt from "../Prompt";
import axios from 'axios';


//login component

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(email, password){


        var bodyFormData = new FormData();

        bodyFormData.set('email', email);
        bodyFormData.set('password', password);

        //POST Request
        axios({
            method: 'post',
            url: 'http://dev3.apppartner.com/Reactors/scripts/user-login.php',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                //handle success
                console.log(response);
                alert('Login Success!');
            })
            .catch(function (response) {
                //handle error
                console.log(response);
                alert('LogIn Fail! Invalid Infomation.');
            });
    }

    render() {

        var email = " ";
        let emailChange = function (value) {
            email = value;
            console.log(email)
        };

        var password = " ";
        let passwordChange = function (value) {
            password = value;
            console.log(password)
        };

        return (
            <div>

                <div className="input-div">
                    <Prompt type="email" onChange={emailChange} placeholder={"Email"} style={"inputstyle email"}/>
                    <Prompt type="password" onChange={passwordChange} placeholder={"Password"} style={"inputstyle password"}/>
                    <button className="button-style"  onClick={() => this.submit(email, password)} >LOGIN</button>
                </div>

            </div>
        );
    }
};

export default Login;