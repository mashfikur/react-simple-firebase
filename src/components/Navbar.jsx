import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
           <div>
            <ul style={{
                display:"flex",
                listStyle:"none",
                gap:"15px"
            }} >
                <li>
                    <NavLink to={"/"} >Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/login"} >Log In</NavLink>
                </li>
            </ul>
           </div>
        </div>
    );
};

export default Navbar;