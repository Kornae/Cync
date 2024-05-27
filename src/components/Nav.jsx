import React from "react";
import BasicInput from "./Input";
import { Button } from "@mui/joy";

export default function Nav() {
    return (
        <div id="s1-nav" className="slide-in-top">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-md">
                    <span id="logo">CYNK</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav">
                            <li className="nav-item"><span className="nav-link">Home</span></li>
                            <li className="nav-item"><span className="nav-link active">Get Started</span></li>
                            <li className="nav-item"><span className="nav-link">About</span></li>
                            <li className="nav-item"><span className="nav-link">Forum</span></li>
                            <li className="nav-item1"> <BasicInput /></li>
                        </ul>
                    </div>
                    <li className="nav-item ml-auto"><Button variant="plain" sx={{ borderRadius: '20px', padding: '5px 30px', bgcolor: '#FFBD33', color: '#161616', outline: 'none !important' }} color="neutral">Login</Button></li>
                </div>
            </nav>
        </div>
    )
}