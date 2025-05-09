import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="p-2 border-b">
            <span className="mr-4 font-bold">MyApp</span>
            <Link to="/" className="mr-2">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};
