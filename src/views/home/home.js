import React from 'react';
import {Link} from "react-router-dom";
import "./home.scss"

const Home = () => (
    <Link to="/vendors">
        <button type="button" className="link-button">
            صفحه رستوران ها
        </button>
    </Link>
);

export default Home