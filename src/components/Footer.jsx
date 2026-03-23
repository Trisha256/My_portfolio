function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Trisha. Built with React &amp; Tailwind CSS.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="hover:text-blue-400 transition">GitHub</a>
        <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
        <a href="#" className="hover:text-blue-400 transition">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
