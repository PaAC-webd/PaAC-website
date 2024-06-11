import { Outlet } from "react-router-dom";
import '../index.css'
import Topbar from "./Topbar/Topbar";

const Layout = () => {
    return <>
        <div className="topbar">
            <Topbar/>
        </div>
    <Outlet/>
    </>
}

export default Layout