function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-wide">Trisha.dev</h1>

        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-28">

        <h2 className="text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-500">Trisha</span> 👋
        </h2>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          I build clean, user-friendly applications and enjoy solving real-world problems through code.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-300">
          <span className="bg-gray-800 px-3 py-1 rounded-lg">React</span>
          <span className="bg-gray-800 px-3 py-1 rounded-lg">JavaScript</span>
          <span className="bg-gray-800 px-3 py-1 rounded-lg">HTML</span>
          <span className="bg-gray-800 px-3 py-1 rounded-lg">CSS</span>
          <span className="bg-gray-800 px-3 py-1 rounded-lg">Python</span>
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>

      </section>

    </div>
  );
}

export default App;