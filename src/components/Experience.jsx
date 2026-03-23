const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Tech Startup",
    duration: "Jun 2024 – Sep 2024",
    description:
      "Developed responsive UI components using React and Tailwind CSS. Collaborated with the design team to implement pixel-perfect interfaces and improved overall page load performance.",
  },
  {
    role: "Web Development Volunteer",
    company: "Local NGO",
    duration: "Jan 2024 – May 2024",
    description:
      "Built and maintained the organization's website using HTML, CSS, and JavaScript. Improved site performance, accessibility, and mobile responsiveness.",
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    duration: "2023 – Present",
    description:
      "Delivered custom web solutions for small businesses including landing pages, portfolio sites, and simple web applications tailored to client requirements.",
  },
];

function Experience() {
  return (
    <section id="experience" className="px-6 py-20 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-10">
        Work <span className="text-blue-500">Experience</span>
      </h3>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-blue-500 pl-6">
            <h4 className="text-xl font-semibold">{exp.role}</h4>
            <p className="text-blue-400 font-medium">{exp.company}</p>
            <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
            <p className="text-gray-400">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
