import { useState } from 'react';

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
    <section id="contact" className="px-6 py-20 max-w-2xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-4">
        Get In <span className="text-blue-500">Touch</span>
      </h3>
      <p className="text-center text-gray-400 mb-10">
        Have a project in mind or just want to say hi? I&apos;d love to hear from you!
      </p>

      {submitted ? (
        <div className="bg-green-900/40 border border-green-600 rounded-2xl px-6 py-8 text-center">
          <p className="text-green-400 text-lg font-semibold mb-2">Message sent! 🎉</p>
          <p className="text-gray-400">Thank you for reaching out. I&apos;llget back to you soon.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm text-blue-400 hover:text-blue-300 transition underline cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="youremail@example.com"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message..."
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-semibold cursor-pointer"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
