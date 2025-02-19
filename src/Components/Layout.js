import { Outlet, Link } from "react-router-dom";
import MenuGame from "./MenuGame";

const Layout = () => {
    return (
        <div class="container">

            <div class="row">
                <div class="col-sm-4 border-1 border-black">
                    <MenuGame></MenuGame>
                </div>
                <div class="col-sm-8 border-1 border-black">
                    <Outlet />
                </div>
            </div>


        </div>
    );
};

export default Layout;