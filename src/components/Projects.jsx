import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS to showcase my skills, experience, and projects.",
    tech: ["React", "Tailwind CSS", "Vite"],
    gradient: "from-indigo-500 to-violet-500",
    github: "https://github.com/Trisha256/My_portfolio",
    demo: "#",
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack task management application with user authentication, CRUD operations, and a clean UI.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    gradient: "from-violet-500 to-fuchsia-500",
    github: "https://github.com/Trisha256/Task-Manager-App",
    demo: "https://task-manager-app-one-lovat.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that fetches real-time weather data from an API and displays it with charts.",
    tech: ["JavaScript", "OpenWeather API", "Chart.js"],
    gradient: "from-cyan-500 to-blue-500",
    github: "https://github.com/Trisha256/Weather_Dashboard_App",
    demo: "https://weather-dashboard-app-lake.vercel.app/",
  },
  {
    title: "Food Journal App",
    description:
      "A food journal app that allows users to log meals, track calories, and visualize their eating habits.",
    tech: ["React", "Node.js", "Express", "SQLite"],
    gradient: "from-pink-500 to-red-500",
    github: "https://github.com/Trisha256/Food_Journal_App",
    demo: "https://food-journal-app.vercel.app/",
  },
{
  title: "OctoFit_Tracker-App",
  description:
    "A fitness tracking app that helps users log workouts, set goals, and monitor progress over time.",
  tech: ["React", "Node.js", "Express", "MongoDB"],
  gradient: "from-green-500 to-teal-500",
  github: "https://github.com/Trisha256/OctoFit_Tracker-App",
  demo: "https://octo-fit-tracker-app.vercel.app/",
},

{
  title: "Currency Converter",
  description:
    "A simple currency converter that fetches real-time exchange rates and allows users to convert between different currencies.",
  tech: ["JavaScript", "ExchangeRate-API"],
  gradient: "from-amber-500 to-orange-500",
  github: "https://github.com/Trisha256/Currency_Converter_App",
  demo: "https://currency-converter-app.vercel.app/",
}
];

function Projects() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          A selection of things I&apos;ve built — from full-stack apps to UI experiments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-slate-800/50 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            {/* Gradient banner */}
            <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

            <div className="p-6 flex flex-col gap-4 flex-1">
              <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-slate-700/80 text-slate-300 px-2.5 py-1 rounded-md text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 text-sm pt-1">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <FaGithub size={14} /> GitHub
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
