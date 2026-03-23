function Hero() {
  return (
    <section id="home" className="flex flex-col items-center text-center px-6 pt-40 pb-28">
      <h2 className="text-5xl font-bold leading-tight">
        Hi, I&apos;m <span className="text-blue-500">Trisha</span> 👋
      </h2>

      <p className="mt-4 text-xl text-blue-400 font-medium">
        Full Stack Developer &amp; Problem Solver
      </p>

      <p className="mt-6 text-gray-400 max-w-xl text-lg">
        I build clean, user-friendly applications and enjoy solving real-world
        problems through code.
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
  );
}

export default Hero;
