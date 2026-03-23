const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Python", "Node.js", "Express", "REST APIs"],
  },
  {
    title: "Tools & Other",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <h3 className="text-4xl font-bold text-center mb-4">
          Technical <span className="text-blue-500">Skills</span>
        </h3>
        <p className="text-center text-gray-400 mb-16">
          Technologies and tools I use to build modern applications
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-2 transition duration-300"
            >
              <h4 className="text-blue-400 font-semibold mb-6 text-lg">
                {category.title}
              </h4>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 hover:bg-blue-500/20 hover:text-blue-400 transition px-4 py-1.5 rounded-full text-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;