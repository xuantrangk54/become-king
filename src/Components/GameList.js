import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuGame from "./MenuGame"

const GameList = ({ games }) => {
    return (
        <div class="container">

            <div class="row">
                <div class="col-sm-1 border-1 border-black">
                    <MenuGame></MenuGame>
                </div>
                <div class="col-sm-11 border-1 border-black">
                    trang
                </div>
            </div>


        </div>

    );
};

export default GameList;
