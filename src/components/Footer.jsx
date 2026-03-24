import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.github.com/Trisha256", icon: <FaGithub size={18} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/patricia-kemirembe-b808a2159/", icon: <FaLinkedin size={18} />, label: "LinkedIn" },
  { href: "https://www.youtube.com/letscode", icon: <FaYoutube size={18} />, label: "YouTube" },
  { href: "https://x.com/KemirembePatri1", icon: <FaTwitter size={18} />, label: "Twitter" },
];

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-[#0a0e1a] mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-xl font-bold">
              <span className="gradient-text">Trisha</span>
              <span className="text-slate-500">.dev</span>
            </Link>
            <p className="text-slate-500 text-sm mt-1">
              Full Stack Developer &amp; Problem Solver
            </p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-indigo-400 transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-slate-500 hover:text-indigo-400 transition-colors duration-200 hover:scale-110 transform"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/60 mt-8 pt-6 text-center text-slate-600 text-sm">
          <p>
            © {new Date().getFullYear()} Trisha. Built with{" "}
            <FaHeart className="inline text-indigo-500 mx-0.5" size={11} />{" "}
            using React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
