function Navbar() {

    const navItems = [
        { link: "Home", path: "home" },
        { link: "About", path: "about" },
        { link: "Education", path: "education" },
        { link: "Contact", path: "contact" },
    ]

    return (
        <>
            <nav className="bg-panel p-3 z-50 relative">
                <div className=" container mx-auto flex items-center justify-between text-primary">
                    <span className=" text-lg font-semibold"><a href="Home">Logo</a></span>

                    <ul className="flex space-x-4">
                        {navItems.map(({ link, path }) => <a type="button" key={link} href={path} className=" block px-3 py-2 w-24 text-center rounded-md hover:bg-secondary hover:text-panel hover:font-black">{link}</a>
                        )}
                    </ul>

                </div>
            </nav>

            
        </>
    );
}

export default Navbar