function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5 border-b border-gray-800 bg-gray-950/90 backdrop-blur-sm">
      <h1 className="text-xl font-bold tracking-wide text-blue-400">Trisha.dev</h1>

      <div className="hidden md:flex space-x-6 text-sm">
        <a href="#about" className="hover:text-blue-400 transition">About</a>
        <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
        <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
