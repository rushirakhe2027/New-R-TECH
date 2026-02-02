import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HackathonSubmission = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="bg-background-dark font-display text-white selection:bg-neon-blue selection:text-black min-h-screen overflow-x-hidden py-12 px-4">
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
        input:focus, select:focus, textarea:focus {
            border-color: var(--neon-blue) !important;
            box-shadow: 0 0 0 2px rgba(0, 242, 255, 0.2) !important;
            outline: none !important;
        }
        .form-input-dark {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            border-radius: 0.75rem;
            padding: 0.75rem 1rem;
            width: 100%;
            transition: all 0.3s;
        }
        .form-label {
            display: block;
            font-size: 10px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #64748B;
            margin-bottom: 0.5rem;
        }
      `}</style>

      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Submission Form v1.0</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase text-white">
            Buildathon <span className="gradient-text">2026</span>
          </h1>
          <p className="text-lg md:text-xl font-bold text-gray-400 uppercase tracking-[0.2em]">Idea Submission Portal</p>
        </header>

        <form action="#" className="space-y-12" method="POST">
          {/* Section 01: Team Details */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-neon-blue">group</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">01. Team Details</h2>
            </div>
            <div className="glass-card rounded-[2rem] p-8 md:p-10">
              <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl mb-8 flex gap-4">
                <span className="material-symbols-outlined text-primary">info</span>
                <p className="text-sm text-gray-300 font-medium">All official communication will be sent only to the <strong>Team Leader's email</strong> address provided below.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="form-label">Team Name</label>
                  <input className="form-input-dark" placeholder="Enter team name" required type="text"/>
                </div>
                <div className="space-y-1">
                  <label className="form-label">College / Institution</label>
                  <input className="form-input-dark" placeholder="Enter college name" required type="text"/>
                </div>
                <div className="space-y-1">
                  <label className="form-label">Team Leader Name</label>
                  <input className="form-input-dark" placeholder="Full name" required type="text"/>
                </div>
                <div className="space-y-1">
                  <label className="form-label">Leader Email</label>
                  <input className="form-input-dark" placeholder="official@email.com" required type="email"/>
                </div>
                <div className="space-y-1">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input-dark" placeholder="+91 00000 00000" required type="tel"/>
                </div>
                <div className="space-y-1">
                  <label className="form-label">Team Size</label>
                  <select className="form-input-dark appearance-none">
                    <option>1 (Solo)</option>
                    <option>2 Members</option>
                    <option>3 Members</option>
                    <option>4 Members</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Section 02: Other Members */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-neon-blue">person_add</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">02. Other Members</h2>
            </div>
            <div className="glass-card rounded-[2rem] p-8 md:p-10">
              <p className="text-xs text-red-400 font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">warning</span> Note: Team members cannot be changed after submission.
              </p>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/2 rounded-2xl border border-white/5">
                  <div className="space-y-1">
                    <label className="form-label">Member 2 Name</label>
                    <input className="form-input-dark" placeholder="Optional" type="text"/>
                  </div>
                  <div className="space-y-1">
                    <label className="form-label">Member 2 Email</label>
                    <input className="form-input-dark" placeholder="Optional" type="email"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/2 rounded-2xl border border-white/5">
                  <div className="space-y-1">
                    <label className="form-label">Member 3 Name</label>
                    <input className="form-input-dark" placeholder="Optional" type="text"/>
                  </div>
                  <div className="space-y-1">
                    <label className="form-label">Member 3 Email</label>
                    <input className="form-input-dark" placeholder="Optional" type="email"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/2 rounded-2xl border border-white/5">
                  <div className="space-y-1">
                    <label className="form-label">Member 4 Name</label>
                    <input className="form-input-dark" placeholder="Optional" type="text"/>
                  </div>
                  <div className="space-y-1">
                    <label className="form-label">Member 4 Email</label>
                    <input className="form-input-dark" placeholder="Optional" type="email"/>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 03: Project Info */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-neon-blue">lightbulb</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">03. Project Info</h2>
            </div>
            <div className="glass-card rounded-[2rem] p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="form-label">Project Title</label>
                  <input className="form-input-dark" placeholder="App/System Name" required type="text"/>
                </div>
                <div className="space-y-1">
                  <label className="form-label">Domain</label>
                  <select className="form-input-dark appearance-none" required>
                    <option disabled selected value="">Select a domain</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>FinTech</option>
                    <option>Smart Cities</option>
                    <option>Agriculture</option>
                    <option>Automation</option>
                    <option>Social Impact</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="form-label">Problem Statement</label>
                <textarea className="form-input-dark min-h-[120px]" placeholder="What real-world challenge are you solving?" required></textarea>
              </div>
              <div className="space-y-1">
                <label className="form-label">Proposed Solution</label>
                <textarea className="form-input-dark min-h-[120px]" placeholder="Explain your approach and architecture" required></textarea>
              </div>
              <div className="space-y-1">
                <label className="form-label">Target Users</label>
                <input className="form-input-dark" placeholder="Who will benefit from this?" required type="text"/>
              </div>
            </div>
          </section>

          {/* Section 04: Technical Specifications */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-neon-blue">settings_ethernet</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">04. Technical Specifications</h2>
            </div>
            <div className="glass-card rounded-[2rem] p-8 md:p-10 space-y-10">
              <div className="space-y-4">
                <label className="form-label">Project Category</label>
                <div className="grid grid-cols-3 gap-4">
                  <label className="relative flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 bg-white/2 cursor-pointer hover:border-neon-blue/50 transition-all">
                    <input checked className="sr-only peer" name="category" type="radio"/>
                    <span className="w-full h-full absolute top-0 left-0 border-2 border-transparent peer-checked:border-neon-blue rounded-xl transition-all"></span>
                    <span className="material-symbols-outlined text-2xl text-gray-500 peer-checked:text-neon-blue">smartphone</span>
                    <span className="text-[10px] font-black uppercase text-gray-400 peer-checked:text-white">Android</span>
                  </label>
                  <label className="relative flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 bg-white/2 cursor-pointer hover:border-neon-blue/50 transition-all">
                    <input className="sr-only peer" name="category" type="radio"/>
                    <span className="w-full h-full absolute top-0 left-0 border-2 border-transparent peer-checked:border-neon-blue rounded-xl transition-all"></span>
                    <span className="material-symbols-outlined text-2xl text-gray-500 peer-checked:text-neon-blue">language</span>
                    <span className="text-[10px] font-black uppercase text-gray-400 peer-checked:text-white">Web App</span>
                  </label>
                  <label className="relative flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 bg-white/2 cursor-pointer hover:border-neon-blue/50 transition-all">
                    <input className="sr-only peer" name="category" type="radio"/>
                    <span className="w-full h-full absolute top-0 left-0 border-2 border-transparent peer-checked:border-neon-blue rounded-xl transition-all"></span>
                    <span className="material-symbols-outlined text-2xl text-gray-500 peer-checked:text-neon-blue">psychology</span>
                    <span className="text-[10px] font-black uppercase text-gray-400 peer-checked:text-white">AI / ML</span>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <label className="form-label">Tech Stack (Select all that apply)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <label className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all group">
                    <input className="w-4 h-4 rounded border-white/20 bg-transparent text-neon-blue focus:ring-neon-blue" type="checkbox"/>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white">Java / Kotlin</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all group">
                    <input className="w-4 h-4 rounded border-white/20 bg-transparent text-neon-blue focus:ring-neon-blue" type="checkbox"/>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white">React / NextJS</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all group">
                    <input className="w-4 h-4 rounded border-white/20 bg-transparent text-neon-blue focus:ring-neon-blue" type="checkbox"/>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white">NodeJS</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all group">
                    <input className="w-4 h-4 rounded border-white/20 bg-transparent text-neon-blue focus:ring-neon-blue" type="checkbox"/>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white">Python / ML</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all group">
                    <input className="w-4 h-4 rounded border-white/20 bg-transparent text-neon-blue focus:ring-neon-blue" type="checkbox"/>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white">MongoDB / SQL</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all group">
                    <input className="w-4 h-4 rounded border-white/20 bg-transparent text-neon-blue focus:ring-neon-blue" type="checkbox"/>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white">Cloud (AWS/GCP)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all group">
                    <input className="w-4 h-4 rounded border-white/20 bg-transparent text-neon-blue focus:ring-neon-blue" type="checkbox"/>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white">Docker</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all group">
                    <input className="w-4 h-4 rounded border-white/20 bg-transparent text-neon-blue focus:ring-neon-blue" type="checkbox"/>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white">Firebase</span>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <label className="form-label">Will you be integrating AI in your solution?</label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input className="w-4 h-4 border-white/20 bg-transparent text-neon-blue focus:ring-neon-blue" name="ai_usage" type="radio"/>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input className="w-4 h-4 border-white/20 bg-transparent text-neon-blue focus:ring-neon-blue" name="ai_usage" type="radio"/>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white">No</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input className="w-4 h-4 border-white/20 bg-transparent text-neon-blue focus:ring-neon-blue" name="ai_usage" type="radio"/>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-white">Planning to integrate</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Section 05: Document Uploads */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-neon-blue">upload_file</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">05. Document Uploads</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-3xl p-8 border-neon-blue/10">
                <label className="form-label">Abstract Document (Mandatory)</label>
                <div className="mt-4 border-2 border-dashed border-white/10 rounded-2xl p-6 text-center hover:border-neon-blue/40 transition-all group">
                  <input accept=".pdf" className="hidden" id="abstract" type="file"/>
                  <label className="cursor-pointer" htmlFor="abstract">
                    <span className="material-symbols-outlined text-3xl text-gray-500 mb-2 group-hover:text-neon-blue">picture_as_pdf</span>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Click to upload PDF</p>
                    <p className="text-[10px] text-gray-600 mt-1 uppercase">MAX 2MB</p>
                  </label>
                </div>
                <p className="mt-4 text-[10px] text-red-500 font-black uppercase tracking-widest">
                  Without abstract = idea rejected automatically
                </p>
              </div>
              <div className="glass-card rounded-3xl p-8">
                <label className="form-label">PPT Presentation (Optional)</label>
                <div className="mt-4 border-2 border-dashed border-white/10 rounded-2xl p-6 text-center hover:border-white/30 transition-all group">
                  <input accept=".ppt,.pptx" className="hidden" id="ppt" type="file"/>
                  <label className="cursor-pointer" htmlFor="ppt">
                    <span className="material-symbols-outlined text-3xl text-gray-500 mb-2 group-hover:text-white">slideshow</span>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Click to upload PPT</p>
                    <p className="text-[10px] text-gray-600 mt-1 uppercase">MAX 10MB</p>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Section 06: Final Declaration */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-neon-blue">verified</span>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">06. Final Declaration</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
                <h4 className="text-lg font-black uppercase tracking-widest mb-4 text-white">Important Notes</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-neon-blue text-sm mt-0.5">circle</span>
                    <span>Selection or rejection emails will be sent within <strong>3-5 working days</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-neon-blue text-sm mt-0.5">circle</span>
                    <span>Projects must be original and built during the hackathon window.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-neon-blue text-sm mt-0.5">circle</span>
                    <span>Incomplete forms will not be considered for evaluation.</span>
                  </li>
                </ul>
              </div>
              <label className="flex items-start gap-4 p-6 glass-card rounded-2xl cursor-pointer group">
                <input className="w-5 h-5 mt-0.5 rounded border-white/20 bg-transparent text-neon-blue focus:ring-neon-blue" required type="checkbox"/>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">I hereby declare that the idea submitted is original and our team will abide by the Buildathon 2026 rules.</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Self-attestation required for processing</p>
                </div>
              </label>
            </div>
          </section>

          <div className="pt-8 text-center space-y-6">
            <button className="w-full md:w-auto bg-neon-blue text-black px-16 py-6 rounded-full font-black text-xl shadow-[0_0_40px_rgba(0,242,255,0.3)] hover:scale-105 active:scale-95 transition-all uppercase tracking-widest" type="submit">
              Submit My Idea
            </button>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-[0.2em]">
              Confirmation of selection status will be sent to the registered email.
            </p>
          </div>
        </form>
      </div>

      <footer className="mt-24 pt-12 w-full max-w-7xl mx-auto border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        <div className="flex items-center gap-3 text-neon-blue">
          <span className="material-symbols-outlined font-black">rocket_launch</span>
          <span className="text-white font-black uppercase tracking-widest text-sm">R Tech Solutions</span>
        </div>
        <p className="text-sm text-gray-600 font-medium text-center">© 2026 R Tech Solutions India. Buildathon 2026 Official Idea Submission.</p>
        <div className="flex gap-6">
          <Link to="/hackathons/rules" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-neon-blue transition-colors">Guidelines</Link>
          <Link to="/privacy-policy" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-neon-blue transition-colors">Privacy</Link>
          <Link to="/terms-conditions" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-neon-blue transition-colors">Terms</Link>
        </div>
      </footer>
    </div>
  );
};

export default HackathonSubmission;
