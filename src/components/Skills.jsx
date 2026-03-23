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
    <section id="skills" className="px-6 py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">
          Technical <span className="text-blue-500">Skills</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-800 rounded-2xl p-6">
              <h4 className="text-blue-400 font-semibold mb-4 text-lg">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-gray-200 px-3 py-1 rounded-lg text-sm"
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
