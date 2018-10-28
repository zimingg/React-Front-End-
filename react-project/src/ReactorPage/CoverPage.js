import React from 'react';
import banner from '../image/banner.png';
import {NavLink} from "react-router-dom";

//part one in Reactor page
const CoverPage = () => {
    return (
        <section
            id="CoverPage"
            style={{ backgroundImage: 'url(' + banner + ')'}}
        >

            <NavLink  to="/" className="reactor">  Reactor </NavLink>
            <NavLink  to="/auth" className="login">  Log In </NavLink>
                <h1>Hello, welcome to Reactor</h1>

        </section>
    );
};

export default CoverPage;