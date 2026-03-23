import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      
      <h1 className="text-2xl font-bold text-blue-400">
        Trisha.dev
      </h1>

      <div className="space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
        <Link to="/about" className="hover:text-blue-400 transition duration-300">About</Link>
        <Link to="/projects" className="hover:text-blue-400 transition duration-300">Projects</Link>
        <Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
        <Link to="/experience" className="hover:text-blue-400 transition duration-300">Experience</Link>
        <Link to="/skills" className="hover:text-blue-400 transition duration-300">Skills</Link>
      </div>

    </nav>
  );
}

export default Navbar;