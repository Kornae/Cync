import React, { useState } from "react";
import Box2 from "./Box2";
import GradientCover from "./Card";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

export default function Box1() {
    const [userState, setUserState] = useState(false)

    let userLoginState = () => {
        setUserState(true)
    }

    let userLoginState2 = () => {
        setUserState(false)
    }
    return (
        <div id="box1">
            <div id="b1-title">
                <div id="b1">
                    <div id="b1-text" className="focus-in-expand">
                        <p id="subtitle">PREMIER ART REPOSITORY</p>
                        <h1 id="h1-text" style={{ zIndex: 1 }}>EMPOWERED BY<br />DR<span style={{ textDecoration: 'underline', textDecorationColor: '#9CDEFF', textUnderlineOffset: '-.7rem', zIndex: 0, textDecorationSkipInk: 'none', textDecorationThickness: '1.4rem', borderRadius: '10px' }}>EAMERS Acro</span>ss <br /> the globe.</h1>
                    </div>


                    {userState ? <>
                        <div id="b1-register" className="focus-in-expand">
                            <p className="new-account-btn">Already have an account?</p>
                            <button onClick={userLoginState2} style={{ fontFamily: 'Figtree', maxWidth: 150, borderRadius: '0px', backgroundColor: 'transparent', color: '#000000', border: 'none', borderBottom: '1.5px solid ', boxShadow: 'none' }} className="button-27" type="button">Sign in <NavigateNextOutlinedIcon sx={{ ml: 1 }} fontSize="small" /></button>
                        </div>
                    </> : <>
                        <div id="b1-register" className="focus-in-expand">
                            <p className="new-account-btn">Don't have account?</p>
                            <button onClick={userLoginState} style={{ fontFamily: 'Figtree', maxWidth: 200, borderRadius: '0px', backgroundColor: 'transparent', color: '#000000', border: 'none', borderBottom: '1.5px solid ', boxShadow: 'none' }} className="button-27" type="button">Create account <NavigateNextOutlinedIcon sx={{ ml: 1 }} fontSize="small" /></button>
                        </div>
                    </>}
                </div>
            </div>

            <div id="b1-footer" className="bounce-in-bottom ">
                <GradientCover />
            </div>

            <Box2
                user={userState}
                click={userLoginState}
                click2={userLoginState2}
            />
        </div>
    )
}




