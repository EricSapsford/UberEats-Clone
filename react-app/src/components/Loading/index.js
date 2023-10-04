import React from "react";
import gif from './apple.gif'
import './Loading.css'

function LoadingComponent() {


    return (
        <div className="loading-container">
            <img src={gif} alt="Loading..." />
        </div>
    )
}

export default LoadingComponent;
