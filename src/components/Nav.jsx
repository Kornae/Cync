import React from "react";
import BasicInput from "./Input";
import { Button } from "@mui/joy";
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function Nav() {
    return (
        <div id="s1-nav" className="slide-in-top">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <span className="styl" id="logo">CYNK</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class=""><FilterListIcon /> </span>
                </button>
                <div class="collapse navbar-collapse ms-auto" id="navbarText">
                    <ul className="navbar-nav">
                        <li className="nav-item"><span className="nav-link">Home</span></li>
                        <li className="nav-item"><span className="nav-link active">Get Started <KeyboardArrowDownOutlinedIcon fontSize="xsmall" /></span></li>
                        <li className="nav-item"><span className="nav-link">About</span></li>
                        <li className="nav-item"><span className="nav-link">Forum</span></li>
                        <li className="nav-item1"><span className="nav-link nav-link-1"><BasicInput /></span></li>
                    </ul>
                </div>
                <span id="logo" className="login-btn"><Button variant="plain" sx={{ borderRadius: '20px', padding: '5px 30px', bgcolor: '#9CDEFF', color: '#161616', outline: 'none !important', fontSize: '.8rem' }} color="neutral">Login</Button></span>
            </nav>
        </div>
    )
}