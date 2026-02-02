import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="bg-background-dark font-display text-white selection:bg-neon-blue selection:text-black min-h-screen">
      <style>{`
        :root {
            --primary: #137fec;
            --neon-blue: #00f2ff;
            --background-dark: #080c14;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .gradient-text {
            background: linear-gradient(to right, #137fec, #00f2ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <header className="relative pt-20 pb-12 px-4 border-b border-white/5">
          <div className="max-w-4xl mx-auto">
            <Link to="/hackathons" className="inline-flex items-center gap-2 text-neon-blue hover:text-white transition-colors mb-8">
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="font-bold uppercase text-sm tracking-wider">Back to Hackathon</span>
            </Link>
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-gray-400 text-lg">Last updated: February 2026</p>
          </div>
        </header>

        <main className="flex-1 max-w-4xl mx-auto px-4 py-16 space-y-12">
          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Information We Collect</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              When you register for Buildathon 2026, we collect personal information including your name, email address, phone number, college/institution details, and team member information.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We also collect project-related information such as your idea submissions, technical specifications, and uploaded documents (abstracts, presentations).
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">How We Use Your Information</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-neon-blue text-sm mt-1">check_circle</span>
                <span>To process your hackathon registration and manage event participation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-neon-blue text-sm mt-1">check_circle</span>
                <span>To communicate important event updates, deadlines, and results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-neon-blue text-sm mt-1">check_circle</span>
                <span>To evaluate project submissions and determine winners</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-neon-blue text-sm mt-1">check_circle</span>
                <span>To issue certificates and distribute prizes</span>
              </li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Data Security</h2>
            <p className="text-gray-400 leading-relaxed">
              We implement industry-standard security measures to protect your personal information. All data is stored securely and access is restricted to authorized personnel only. We do not sell or share your personal information with third parties without your consent.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Your Rights</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You have the right to access, update, or delete your personal information at any time. To exercise these rights, please contact us at support@rtechsolutions.online.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl border-primary/20">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Contact Us</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-white font-bold">Email: support@rtechsolutions.online</p>
              <p className="text-white font-bold">Phone: +91 8421812027</p>
            </div>
          </section>
        </main>

        <footer className="bg-black py-12 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3 text-neon-blue">
              <span className="material-symbols-outlined font-black">rocket_launch</span>
              <span className="text-white font-black uppercase tracking-widest text-sm">R Tech Solutions</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">© 2026 R Tech Solutions India. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
