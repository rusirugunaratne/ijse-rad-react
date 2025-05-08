import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white flex justify-between items-center px-8 py-4">
            <div className="text-xl font-bold">MySite</div>
            <ul className="flex gap-6 list-none">
                <ul className="flex gap-6 list-none">
                    <li><NavLink href="#">Home</NavLink></li>
                    <li><NavLink href="#">About</NavLink></li>
                    <li><NavLink href="#">Contact</NavLink></li>
                </ul>
            </ul>
        </nav>
    );
};

export default Navbar;
