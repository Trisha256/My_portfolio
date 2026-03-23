import { FaCode, FaServer, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaCode />,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    color: "text-violet-400",
    border: "border-violet-500/30",
    bg: "bg-violet-500/10",
    skills: ["Python", "Node.js", "Express", "REST APIs"],
  },
  {
    title: "Tools & Other",
    icon: <FaTools />,
    color: "text-indigo-400",
    border: "border-indigo-500/30",
    bg: "bg-indigo-500/10",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
];

function Skills() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Technologies and tools I use to build modern applications
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className={`bg-slate-800/50 border ${category.border} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300`}
          >
            {/* Category header */}
            <div className={`flex items-center gap-3 mb-6 ${category.color}`}>
              <div className={`${category.bg} p-2 rounded-lg text-lg`}>
                {category.icon}
              </div>
              <h3 className="font-semibold text-lg text-white">{category.title}</h3>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`${category.bg} ${category.color} border ${category.border} px-3 py-1.5 rounded-full text-sm font-medium hover:brightness-125 transition-all duration-200 cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;