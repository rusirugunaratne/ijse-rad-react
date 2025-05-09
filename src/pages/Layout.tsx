import {Navbar} from "../components/Navbar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="p-5">
                <Outlet />
            </div>
        </>
    )
}

export default Layout