import React from 'react';
import Prompt from "../Prompt";
import axios from 'axios';

//signup component

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(username, email, password){

        var bodyFormData = new FormData();

        bodyFormData.set('username', username);
        bodyFormData.set('email', email);
        bodyFormData.set('password', password);

        //POST Request
        axios({
            method: 'post',
            url: 'http://dev3.apppartner.com/Reactors/scripts/user-signup.php',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                //handle success
                console.log(response);
                alert('Sign Up Success!');
            })
            .catch(function (response) {
                //handle error
                console.log(response);
                alert('Sign Up Fail! Invali Infomation.');
            });
    }





    render(){
        var username = " ";
        let usernameChange = function (value) {
            username = value;
            console.log(username)
        };

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

                <div id = 'signup' className="input-div">
                    <Prompt type="text" onChange={usernameChange} placeholder={"Username"} style={"inputstyle user"}/>
                    <Prompt type="email" onChange={emailChange} placeholder={"Email"} style={"inputstyle email"}/>
                    <Prompt type="password" onChange={passwordChange} placeholder={"Password"} style={"inputstyle password"}/>
                    <button className="button-style"  onClick={() => this.submit(username, email, password)} >SIGN UP</button>
                </div>
            </div>
        );
    }

};

export default Signup;