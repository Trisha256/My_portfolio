import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Learning Ambassador",
    company: "ALX Africa",
    duration: "sep 2023 – Dec 2024",
    description: "Organizing peer learning sessions with my colleagues every week to discuss and share our understanding of the current projects. Passing on learning messages to the rest of my peers to ensure we all get the best out of the program. Participating in learning, by inspiring others and empowering them to take part in learning activities"
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Startup",
    duration: "Jan 2024 – May 2024",
    description:
      "Developed responsive UI components using React and Tailwind CSS. Collaborated with the design team to implement pixel-perfect interfaces and improved overall page load performance.",
  },
  {
    role: "Web Development Volunteer",
    company: "Event Box",
    duration: "Jun 2024 – Dec 2024",
    description:
      "Built and maintained the organization's website using HTML, CSS, and JavaScript. Improved site performance, accessibility, and mobile responsiveness.",
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    duration: "Dec 2023 – Present",
    description:
      "Delivered custom web solutions for small businesses including landing pages, portfolio sites, and simple web applications tailored to client requirements.",
  },
];

function Experience() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          My professional journey so far
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-8 group">
              {/* Timeline dot */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 z-10">
                <FaBriefcase size={14} />
              </div>

              {/* Card */}
              <div className="flex-1 bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300 group-hover:-translate-y-0.5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  <span className="text-xs text-slate-500 bg-slate-700/60 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-indigo-400 text-sm font-medium mb-3">{exp.company}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
