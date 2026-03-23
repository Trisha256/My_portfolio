const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS to showcase my skills, experience, and projects.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack task management application with user authentication, CRUD operations, and a clean UI.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that fetches real-time weather data from an API and displays it with charts.",
    tech: ["JavaScript", "OpenWeather API", "Chart.js"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">
          Featured <span className="text-blue-500">Projects</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-2xl p-6 flex flex-col gap-4 border border-transparent hover:border-blue-500 transition"
            >
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="text-gray-400 text-sm flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-gray-700 text-blue-300 px-2 py-1 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm mt-2">
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-white transition"
                >
                  GitHub ↗
                </a>
                <a
                  href={project.demo}
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
