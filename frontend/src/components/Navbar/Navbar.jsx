import { Link } from "react-router-dom";
import "./navbar.css";

const Narbar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/dogs">Dogs</Link>
                <Link to="/checkout">Cart</Link>
            </nav>
        </>
    );
}

export default Narbar;