import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp.js";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <div className="App">
                {/* <div className="auth-wrapper">
                    <div className="auth-inner"> */}
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route path="/sign-in" element={<Login />} />
                            <Route path="/sign-up" element={<SignUp />} />
                        </Routes>
                    {/* </div>
                </div> */}
            </div>
        </Router>
    );
}

export default App;
