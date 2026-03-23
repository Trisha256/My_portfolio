import { useState } from 'react';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="px-6 py-24 max-w-2xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-slate-400">
          Have a project in mind or just want to say hi? I&apos;d love to hear from you!
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-500/10 border border-emerald-500/40 rounded-2xl px-6 py-10 text-center">
          <div className="text-4xl mb-4">🎉</div>
          <p className="text-emerald-400 text-lg font-semibold mb-2">Message sent!</p>
          <p className="text-slate-400 text-sm">
            Thank you for reaching out. I&apos;ll get back to you soon.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm text-indigo-400 hover:text-indigo-300 transition underline cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-sm text-slate-400 mb-2">
              <FaUser size={12} /> Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm text-slate-400 mb-2">
              <FaEnvelope size={12} /> Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="youremail@example.com"
              className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200"
            />
          </div>

          {/* Message */}
          <div>
            <label className="flex items-center gap-2 text-sm text-slate-400 mb-2">
              <FaComment size={12} /> Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message..."
              className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="btn-glow w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 py-3 rounded-xl font-semibold cursor-pointer"
          >
            <FaPaperPlane size={14} /> Send Message
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
