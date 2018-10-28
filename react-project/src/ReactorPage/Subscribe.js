import React from 'react';
import Prompt from "../Prompt";
import axios from 'axios';


//part five in Reactor page

class Subscribe extends React.Component{

    constructor(props) {
        super(props);



        this.submit = this.submit.bind(this);

    }


    submit(promptValue){

        console.log(promptValue);
        var bodyFormData = new FormData();

        bodyFormData.set('email', promptValue);

        axios({
            method: 'post',
            url: 'http://dev3.apppartner.com/Reactors/scripts/add-email.php',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
                //handle success
                //console.log(response);
                alert('Subscribe Success!');
            })
            .catch(function (response) {
                //handle error
                //console.log(response);
                alert('Subscribe Fail! Try again!');
            });
    }


    render(){

        var promptValue = " ";
        let promptChange = function (value) {
            promptValue = value;
            console.log(promptValue)
        };

        return (
            <section id='subscribe' className="">
                <h2 className="div-width ">SUBSCRIBE TO NEWSLETTER</h2>
                <div className="pic-col margin-more">
                    <Prompt type="text" onChange={promptChange} placeholder={"Your Email"} style={"sub-input"}/>
                    <button className="button-css"  onClick={() => this.submit(promptValue)} >Subscribe</button>
                </div>


            </section>
        );

    }

};

export default Subscribe;