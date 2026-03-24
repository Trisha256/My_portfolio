import { Link } from "react-router-dom";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Python", icon: <FaPython className="text-green-400" /> },
];

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-28 md:py-36 text-center max-w-6xl mx-auto">

      {/* Decorative background orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for work
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Trisha</span> 👋
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-4">
          Full Stack Developer &amp; Problem Solver
        </p>

        <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build clean, user-friendly applications and enjoy solving real-world
          problems through code — turning ideas into polished digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            to="/projects"
            className="btn-glow bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            View Projects →
          </Link>
          <Link
            to="/contact"
            className="border border-slate-600 hover:border-indigo-500 hover:text-indigo-300 text-slate-300 px-7 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            Contact Me
          </Link>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-5 mb-14">
          <a
            href="https://www.github.com/Trisha256"
            aria-label="GitHub"
            className="text-slate-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/patricia-kemirembe-b808a2159/"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://www.youtube.com/letscode"
            aria-label="YouTube"
            className="text-slate-500 hover:text-sky-400 transition-colors duration-200 hover:scale-110 transform"
          >
            <FaYoutube size={22} />
          </a>
          <a
            href="https://x.com/KemirembePatri1"
            aria-label="Twitter"
            className="text-slate-500 hover:text-cyan-400 transition-colors duration-200 hover:scale-110 transform"
          >
            <FaTwitter size={22} />
          </a>
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 px-4 py-2 rounded-full text-sm text-slate-300 hover:border-indigo-500/50 hover:text-white transition-all duration-200"
            >
              <span className="text-base">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
