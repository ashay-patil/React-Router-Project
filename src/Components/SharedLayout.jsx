import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import StyledNavbar from "./StyledNavbar";
const SharedLayout= ()=>{
    return (
        <>
            <StyledNavbar/>
            <Outlet/>           {/* For Nested Route Components*/}
        </>
    )
}

/**
 * The Components surrounding the Outlet will be shared among the nested Routes
 * The Nested Route Components will be displayed in place of the Outlet Components
 */
export default SharedLayout;