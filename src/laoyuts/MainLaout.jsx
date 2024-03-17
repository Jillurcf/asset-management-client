import { Outlet } from "react-router-dom";
import NavBar from "../component/shared/navBar/NavBar";

const MainLaout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLaout;