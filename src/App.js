import React from 'react';
import styles from "./App.module.css"
import {Route, Link, Routes} from 'react-router-dom';
import Home from './pages/home/index';
import AboutUs from './pages/aboutUs/index';
import SignIn from './pages/signIn/index';
import NotFound from "./pages/notFound/index";

const App = () => {
    return (
        <div className={styles.navbar}>
            <nav className={styles.navigator}>
                <ul className={styles.nav_list}>
                    <li className={styles.list}>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutUs">About Us</Link>
                    </li>
                    <li>
                        <Link to="/signIn">Sign In</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signIn" element={<SignIn />}/>
                <Route path="/aboutUs" element={<AboutUs />}/>
                <Route path="/error" element={<NotFound />}/>
            </Routes>
        </div>
    );
};

export default App;



