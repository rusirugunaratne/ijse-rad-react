const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white flex justify-between items-center px-8 py-4">
            <div className="text-xl font-bold">MySite</div>
            <ul className="flex gap-6 list-none">
                <li><a href="#" className="text-white font-medium hover:text-gray-300">Home</a></li>
                <li><a href="#" className="text-white font-medium hover:text-gray-300">About</a></li>
                <li><a href="#" className="text-white font-medium hover:text-gray-300">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
