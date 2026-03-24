const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
];

function About() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      {/* Section heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          A little more about who I am and what drives me
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left — avatar + stats */}
        <div className="flex flex-col items-center md:items-start gap-8">
          {/* Avatar placeholder */}
          <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center text-6xl font-extrabold text-white shadow-lg shadow-indigo-500/30 select-none">
            T
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-bold gradient-text">{value}</p>
                <p className="text-xs text-slate-400 mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — text */}
        <div className="text-slate-400 text-lg leading-relaxed space-y-5">
          <p>
            I&apos;m <span className="text-white font-semibold">Trisha</span>, a passionate
            software developer with a love for building impactful and elegant web
            applications. I enjoy working at the intersection of design and technology
            to create experiences that are both functional and beautiful.
          </p>
          <p>
            My journey started with curiosity about how websites work, and evolved
            into a full-stack development skillset. I thrive on learning new
            technologies and solving complex problems with clean, maintainable code.
          </p>
          <p>
            When I&apos;m not coding, I enjoy exploring new tools, contributing to open
            source, and sharing knowledge with the developer community.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {["React", "Node.js", "Python", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
