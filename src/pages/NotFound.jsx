import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-8xl font-extrabold gradient-text mb-4">404</p>
      <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
      <p className="text-slate-400 mb-8 max-w-sm">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn-glow bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 rounded-xl font-semibold transition-all duration-200"
      >
        ← Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
