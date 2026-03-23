import { FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Python", icon: <FaPython /> },
];

function Hero() {
  return (
    <section id="home" className="py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I'm <span className="text-blue-400">Trisha</span> 👋
      </h2>

      <p className="text-xl text-gray-300 mb-6">
        Full Stack Developer &amp; Problem Solver
      </p>

      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        I build clean, user-friendly applications and enjoy solving real-world
        problems through code.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600">
          View projects
          </button>
          <button className="border border-gray-500 px-6 py-2 rounded-lg hover:bg-gray-800">
            Contact me
          </button>
      </div>

       <div className="flex flex-wrap justify-center gap-4 mt-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-400 transition"
          >
            <span className="text-lg">{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>
      </section>
  );
}

export default Hero;
