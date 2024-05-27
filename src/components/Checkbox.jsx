import React from "react";

export default function OfficialCheckbox(props) {
    return (
        <div className="checkbox-wrapper-12 flex-display" >
            <div className="cbx flex-display">
                <input id="cbx-12" type="checkbox" />
                <label for="cbx-12"></label>
                <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                </svg>
            </div>
            {props.user ?
                <><div className="flex-display" style={{ fontSize: '.8rem', fontWeight: '500' }}>By Registering, you agree to our Terms of Service and Privacy Policy.</div></> :
                <><div className="flex-display" style={{ fontSize: '.8rem', fontWeight: '500', marginLeft: '10px' }}>Remember me</div></>}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo-12">
                        <fegaussianblur in="SourceGraphic" stddeviation="4" result="blur"></fegaussianblur>
                        <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></fecolormatrix>
                        <feblend in="SourceGraphic" in2="goo-12"></feblend>
                    </filter>
                </defs>
            </svg>
        </div>


    )
}



