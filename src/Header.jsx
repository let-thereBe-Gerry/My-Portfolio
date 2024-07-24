function Header() {
  return (
    <>
      <header className="bg-green-400 p-4 flex justify-between items-center">
        <h1 className="text-4xl">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Education</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  );
}

export default Header;
