import React from "react";
import "../luckyy-wheel.scss";
import {initLuckyly} from "../luckywheel.js";
import { useEffect } from "react";

const LuckyWheel = ({ }) => {
    useEffect(() => {
        console.log("Component đã load xong!"); 
        initLuckyly();
      }, []); 

    return (
        <div>
            <div class="wrapper">
                <div class="container">
                    <canvas id="wheel"></canvas>
                    <button id="spin-btn">Spin</button>
                    <img src="https://cutewallpaper.org/24/yellow-arrow-png/155564497.jpg" alt="spinner arrow" />
                </div>
                <div id="final-value">
                    <p>Click On The Spin Button To Start</p>
                </div>
            </div>
        </div>
    );
};

export default LuckyWheel;
