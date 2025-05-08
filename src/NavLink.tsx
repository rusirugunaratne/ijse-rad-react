interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
    <a href={href} className="text-white font-medium hover:text-gray-300">
        {children}
    </a>
);

export default NavLink;