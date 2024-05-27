import React from "react";
import CardVariants from "./Login";

export default function Box2(props) {
    return (
        <div id="box2" className="slide-in-right">
            <div id="b2-title" className="flex-display text-focus-in">
                <div>
                    <div style={{ fontSize: '1rem', fontWeight: '500', textTransform: 'uppercase' }} id='white-text'>Wanderer above the Sea of Fog</div>
                    <div style={{ fontSize: '.8rem' }} id='white-text'>Caspar David Friedrich</div>
                </div>
            </div>
            <div id="b2-login">
                <CardVariants
                    user={props.user}
                />
            </div>

            <div id="b2-pages">

            </div>
        </div>
    )
}