import React from "react";
import CardVariants from "./Login";

export default function Box2(props) {
    return (
        <div id="box2" className="slide-in-right">
            <div id="b2-title" className="flex-display text-focus-in">
                <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '500', textTransform: 'uppercase' }} id='white-text'>Eiffel Tower</div>
                    <div style={{ fontSize: '.9rem' }} id='white-text'>Paris, France</div>
                </div>
            </div>
            <div id="b2-login">
                <CardVariants
                    user={props.user}
                    click={props.click}
                    click2={props.click2}
                />
            </div>
        </div>
    )
}