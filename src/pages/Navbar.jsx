function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-30 px-6 py-4 flex justify-between items-center bg-black bg-opacity-20 backdrop-blur-md">
        <h1 className="text-white text-xl font-bold">Theodora</h1>
        <ul className="flex space-x-6 text-white font-medium">
          <li><a href="#home" className="hover:text-pink-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-pink-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  