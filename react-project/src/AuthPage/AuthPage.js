import React from 'react';
import bg from '../image/onboarding-bg.png';
import {NavLink} from "react-router-dom";
import Auth from "./Auth";

// auth page which include both signup and login
const AuthPage = () => {
    return (
        <section
            id="authpage"
            style={{ backgroundImage: 'url(' + bg + ')'}}
        >
            <NavLink  to="/" className="reactor">  Reactor </NavLink>
            <Auth />

        </section>
    );
};

export default AuthPage;