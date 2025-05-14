import { Outlet } from "react-router-dom";
import Header from "../main/Header.jsx";
import Footer from "../main/Footer.jsx";

function Layout() {
    return (
       <div>
        <Header />
        <Outlet />
        <Footer />
       </div>
    )
}

export default Layout
