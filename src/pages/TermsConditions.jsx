import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
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
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-gray-400 text-lg">Buildathon 2026 - Official Terms of Service</p>
          </div>
        </header>

        <main className="flex-1 max-w-4xl mx-auto px-4 py-16 space-y-12">
          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Acceptance of Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              By registering for Buildathon 2026, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not register for or participate in the event.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Eligibility</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-neon-blue text-sm mt-1">arrow_right</span>
                <span>Participants must be currently enrolled in Diploma, BTech, MCA, or related technical degree programs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-neon-blue text-sm mt-1">arrow_right</span>
                <span>Teams can consist of 1-4 members from the same or different institutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-neon-blue text-sm mt-1">arrow_right</span>
                <span>All team members must be students at the time of registration</span>
              </li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl border-red-500/20">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight flex items-center gap-2">
              <span className="material-symbols-outlined text-red-500">warning</span>
              Registration & Payment
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The registration fee of ₹500 per team is <strong className="text-white">non-refundable</strong> under normal circumstances. Refunds will only be issued if the event is officially cancelled by R Tech Solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Payment must be completed to confirm your team's participation. Incomplete registrations will not be considered.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Project Originality</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              All projects must be original work created during the 36-hour hackathon window. Pre-existing projects or projects started before the official start time are strictly prohibited.
            </p>
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
              <p className="text-red-400 font-bold text-sm">
                Teams found using pre-existing code or plagiarized content will be immediately disqualified without refund. Code originality will be verified using industry-standard plagiarism detection tools.
              </p>
            </div>
          </section>

          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Intellectual Property</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Participants retain full ownership of their project's intellectual property. However, by participating, you grant R Tech Solutions the right to:
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-neon-blue text-sm mt-1">check_circle</span>
                <span>Showcase your project in promotional materials and social media</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-neon-blue text-sm mt-1">check_circle</span>
                <span>Feature your project in case studies or event highlights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-neon-blue text-sm mt-1">check_circle</span>
                <span>Use project demos for educational or marketing purposes</span>
              </li>
            </ul>
          </section>

          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Code of Conduct</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              All participants must adhere to professional standards of behavior. R Tech Solutions is committed to providing a harassment-free experience for everyone.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Violations of the code of conduct, including harassment, plagiarism, or attempts to game the system, will result in immediate disqualification and potential ban from future events.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Judging & Prizes</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              All judging decisions are final and binding. Winners will be selected based on the published evaluation criteria. Prize distribution will occur within 30 days of the event conclusion.
            </p>
            <p className="text-gray-400 leading-relaxed">
              R Tech Solutions reserves the right to modify prize amounts or distribution based on total registrations and event circumstances.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              R Tech Solutions is not responsible for any technical issues, internet connectivity problems, or other circumstances beyond our control that may affect your participation. Participants are responsible for ensuring they have the necessary equipment and internet access.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Changes to Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              R Tech Solutions reserves the right to modify these Terms and Conditions at any time. Participants will be notified of significant changes via email. Continued participation after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="glass-card p-8 rounded-3xl border-primary/20">
            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Contact Information</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              For questions regarding these Terms and Conditions, please contact:
            </p>
            <div className="space-y-2">
              <p className="text-white font-bold">Email: support@rtechsolutions.online</p>
              <p className="text-white font-bold">Phone: +91 8421812027</p>
              <p className="text-white font-bold">WhatsApp: <a href="https://wa.me/918421812027" className="text-neon-blue hover:underline">+91 8421812027</a></p>
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

export default TermsConditions;
