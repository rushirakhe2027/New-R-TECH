import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HackathonLanding = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="bg-background-dark font-display text-white selection:bg-neon-blue selection:text-black">
      <style>{`
        :root {
            --primary: #137fec;
            --neon-blue: #00f2ff;
            --background-dark: #080c14;
        }
        .glow-box {
            box-shadow: 0 0 20px rgba(0, 242, 255, 0.2);
        }
        .neon-border {
            border: 1px solid var(--neon-blue);
            box-shadow: 0 0 15px rgba(0, 242, 255, 0.4);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .gradient-text {
            background: linear-gradient(to right, #137fec, #00f2ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <main className="flex-1">
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[140px]"></div>
            </div>
            <div className="relative z-10 w-full max-w-6xl text-center">
                <div className="flex flex-col items-center gap-6 text-neon-blue mb-2">
                  <img 
                    src="/assets/r-tech-logo.png" 
                    alt="R Tech Solutions Logo" 
                    className="h-24 w-auto object-contain drop-shadow-[0_0_20px_rgba(0,102,255,0.8)] filter brightness-125 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-neon-blue/50"></div>
                    <span className="text-white font-black tracking-[0.3em] uppercase text-sm md:text-base">
                      R Tech Solutions Presents
                    </span>
                    <div className="h-[2px] w-12 bg-neon-blue/50"></div>
                  </div>
                </div>
                <div className="bg-neon-blue/10 border border-neon-blue/30 backdrop-blur-md px-8 py-2.5 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                  <span className="text-neon-blue text-xs font-black tracking-widest uppercase">Online Hackathon</span>
                </div>
              <h1 className="text-5xl md:text-[8rem] lg:text-[9rem] font-black tracking-tighter mb-8 leading-[0.9] text-white">
                BUILDATHON <br/>
                <span className="gradient-text">2026</span>
              </h1>
              <p className="text-gray-400 text-xl md:text-3xl font-light max-w-3xl mx-auto mb-16 leading-relaxed">
                Build from Anywhere. <span className="text-white font-bold">Compete Everywhere.</span>
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-16">
                <div className="glass-card p-6 md:p-8 rounded-3xl w-full max-w-[340px] text-left border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-neon-blue">workspace_premium</span>
                    <span className="text-neon-blue text-xs font-black uppercase tracking-widest">Prize Distribution</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🥇</span>
                        <span className="font-bold text-white">Winner</span>
                      </div>
                      <span className="text-2xl font-black text-neon-blue">₹15,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🥈</span>
                        <span className="text-gray-300 font-bold">1st Runner-Up</span>
                      </div>
                      <span className="text-xl font-bold text-white">₹10,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🥉</span>
                        <span className="text-gray-400 font-bold">2nd Runner-Up</span>
                      </div>
                      <span className="text-lg font-bold text-white">₹5,000</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-[10px] text-primary font-black uppercase tracking-widest leading-loose">
                      Total Prize Pool: ₹30,000 <br/>
                      + Internship & LOR Opportunities
                    </p>
                  </div>
                </div>
                <div className="glass-card p-6 md:p-8 rounded-3xl w-full max-w-[340px] text-left border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    <span className="text-primary text-xs font-black uppercase tracking-widest">Entry & Eligibility</span>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Registration Fees</p>
                      <p className="text-xl font-black text-white">Idea Submission: <span className="text-green-400 uppercase">Free</span></p>
                      <p className="text-sm text-gray-400">Final (Shortlisted): ₹500/Team</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Who can join?</p>
                      <p className="text-sm text-white font-bold uppercase tracking-tight">Open to Students across India</p>
                      <p className="text-xs text-gray-400 mt-1 italic leading-tight">Cross-college teams are allowed</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Team Size: 1-4 Members</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
                <Link to="/hackathons/submit" className="w-full sm:w-auto bg-neon-blue text-black px-8 md:px-16 py-4 md:py-6 rounded-full text-lg md:text-xl font-black shadow-[0_0_30px_rgba(0,242,255,0.4)] hover:shadow-[0_0_50px_rgba(0,242,255,0.6)] transition-all hover:scale-105 uppercase tracking-widest text-center">
                  REGISTER NOW
                </Link>
                <a href="#ambassador" className="w-full sm:w-auto border border-neon-blue/20 hover:border-neon-blue/50 bg-neon-blue/5 hover:bg-neon-blue/10 text-neon-blue px-8 md:px-12 py-4 md:py-6 rounded-full text-lg font-bold transition-all text-center uppercase tracking-widest shadow-[0_0_20px_rgba(0,242,255,0.1)]">
                  Join as Campus Ambassador
                </a>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white/2 border-y border-white/5">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-black mb-2 uppercase tracking-[0.2em] text-white">Organized by R Tech Solutions</h2>
              <p className="text-neon-blue text-sm font-bold uppercase tracking-[0.3em] mb-12">Web & App Development | AI/ML Solutions</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center gap-4 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-neon-blue/10 transition-colors">
                    <span className="material-symbols-outlined text-neon-blue text-3xl">corporate_fare</span>
                  </div>
                  <span className="font-bold text-gray-300 text-lg uppercase tracking-widest">Real Company</span>
                </div>
                <div className="flex flex-col items-center gap-4 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-neon-blue/10 transition-colors">
                    <span className="material-symbols-outlined text-neon-blue text-3xl">terminal</span>
                  </div>
                  <span className="font-bold text-gray-300 text-lg uppercase tracking-widest">Real Projects</span>
                </div>
                <div className="flex flex-col items-center gap-4 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-neon-blue/10 transition-colors">
                    <span className="material-symbols-outlined text-neon-blue text-3xl">gavel</span>
                  </div>
                  <span className="font-bold text-gray-300 text-lg uppercase tracking-widest">Real Judging</span>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl font-black mb-12 uppercase tracking-tight text-white">Event Logistics</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="glass-card p-6 rounded-2xl border-white/5">
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Participation Mode</p>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-neon-blue">cloud_done</span>
                        <p className="text-xl font-bold">100% Online</p>
                      </div>
                    </div>
                    <div className="glass-card p-6 rounded-2xl border-white/5">
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Event Window</p>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-neon-blue">schedule</span>
                        <p className="text-xl font-bold">Online Event</p>
                      </div>
                      <p className="text-[10px] text-gray-500 mt-2 italic font-medium">After confirmation mail</p>
                    </div>
                    <div className="glass-card p-6 rounded-2xl border-white/5">
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Collaboration</p>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-neon-blue">diversity_3</span>
                        <p className="text-xl font-bold">1-4 Members</p>
                      </div>
                      <p className="text-[10px] text-gray-500 mt-2 italic font-medium">Solo participants allowed</p>
                    </div>
                    <div className="glass-card p-6 rounded-2xl border-white/5">
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Registration Fee</p>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-neon-blue">payments</span>
                        <p className="text-xl font-bold">₹500 Per Team</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl font-black mb-8 uppercase tracking-tight text-white">Eligibility & Tech</h2>
                  <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl border-neon-blue/20 bg-neon-blue/5">
                      <h4 className="text-neon-blue text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">verified_user</span>
                        Eligibility Criteria
                      </h4>
                      <ul className="space-y-3">
                        {[
                          'Open to all UG/PG students & recent graduates.',
                          'Individual or team (1-4 members) registration.',
                          'Each participant can join only one team.',
                          'Must work on original ideas/code during event.',
                          'Basic knowledge of Web, App, or AI/ML.',
                          'Must have laptop & stable internet connection.'
                        ].map((rule, idx) => (
                          <li key={idx} className="flex gap-2 items-start text-[11px] font-medium text-gray-300">
                            <span className="text-neon-blue">▹</span>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl font-bold text-[11px] uppercase tracking-wider">Android / Java</span>
                      <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl font-bold text-[11px] uppercase tracking-wider">Web / MERN Stack</span>
                      <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl font-bold text-[11px] uppercase tracking-wider">AI-ML / Python</span>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                      <h3 className="font-black text-sm mb-3 flex items-center gap-2 text-white uppercase tracking-widest">
                        <span className="material-symbols-outlined text-neon-blue text-base">smart_toy</span>
                        AI Usage Policy
                      </h3>
                      <p className="text-gray-400 text-[11px] leading-relaxed">
                        <strong className="text-white">AI is NOT compulsory.</strong> However, meaningful AI integration will be given higher consideration in scoring. Use of tools like ChatGPT is allowed if explained well.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-12">
                <div className="glass-card p-10 rounded-[2.5rem] border-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                  <h2 className="text-3xl font-black mb-8 flex items-center gap-3 text-white">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                    Evaluation Criteria
                  </h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 font-medium">Problem Understanding</span>
                        <span className="text-primary font-black">20%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[20%]"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 font-medium">Solution & Innovation</span>
                        <span className="text-primary font-black">25%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[25%]"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 font-medium">Technical Implementation</span>
                        <span className="text-primary font-black">25%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[25%]"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 font-medium">Real-world Impact</span>
                        <span className="text-primary font-black">15%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[15%]"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 font-medium">AI Integration (if any)</span>
                        <span className="text-primary font-black">10%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[10%]"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 font-medium">Presentation & Demo</span>
                        <span className="text-primary font-black">5%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[5%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-4 bg-background-dark">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-neon-blue text-xs font-black uppercase tracking-[0.3em] mb-4 inline-block">Roadmap to Glory</span>
                <h2 className="text-5xl font-black uppercase tracking-tighter text-white">Event Timeline 2026</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-neon-blue/30 transition-all group">
                  <div className="mb-6">
                    <span className="text-neon-blue font-black text-sm uppercase tracking-widest block mb-2">Phase 01</span>
                    <p className="text-xs text-gray-500 font-bold">1 Feb – 28 Feb</p>
                  </div>
                  <h4 className="text-xl font-black text-white mb-3 uppercase leading-tight">Idea Submission</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Free entry for all students. Submit your vision using the provided templates.</p>
                </div>
                <div className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-neon-blue/30 transition-all group">
                  <div className="mb-6">
                    <span className="text-primary font-black text-sm uppercase tracking-widest block mb-2">Phase 02</span>
                    <p className="text-xs text-gray-500 font-bold">1 Mar – 7 Mar</p>
                  </div>
                  <h4 className="text-xl font-black text-white mb-3 uppercase leading-tight">Evaluation</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Our panel reviews submissions. Shortlisted teams move to the final stage.</p>
                </div>
                <div className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-neon-blue/30 transition-all group">
                  <div className="mb-6">
                    <span className="text-indigo-400 font-black text-sm uppercase tracking-widest block mb-2">Phase 03</span>
                    <p className="text-xs text-gray-500 font-bold">8 Mar – 15 Mar</p>
                  </div>
                  <h4 className="text-xl font-black text-white mb-3 uppercase leading-tight">Final Reg</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Shortlisted teams confirm participation with a ₹500 registration fee.</p>
                </div>
                <div className="glass-card p-8 rounded-[2rem] border-neon-blue/50 bg-neon-blue/5 shadow-[0_0_30px_rgba(0,242,255,0.05)] transition-all group">
                  <div className="mb-6">
                    <span className="text-white font-black text-sm uppercase tracking-widest block mb-2">Phase 04</span>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">End of March</p>
                  </div>
                  <h4 className="text-xl font-black text-neon-blue mb-3 uppercase leading-tight">Final Demos</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-bold">Live presentations, project judging, and grand prize distribution.</p>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-10 rounded-[2.5rem] border-white/5 flex items-center gap-8 group hover:bg-white/5 transition-all">
                  <div className="w-20 h-20 rounded-3xl bg-neon-blue/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-neon-blue text-4xl">emoji_events</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white uppercase mb-2">Recognition</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Certificates for <span className="text-white font-black italic underline decoration-neon-blue">ALL</span> final presenters. Special goodies for top teams.</p>
                  </div>
                </div>
                <div className="glass-card p-10 rounded-[2.5rem] border-white/5 flex items-center gap-8 group hover:bg-white/5 transition-all">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-4xl">trending_up</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white uppercase mb-2">Growth</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Top performers have high chance to get <span className="text-white font-black">LOR</span> and <span className="text-white font-black">Internship</span> opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white/2">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter text-white">Hackathon Domains</h2>
                <p className="text-gray-500 font-medium">Choose your battlefield from these 7 core industry domains</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                <div className="glass-card p-6 rounded-3xl text-center flex flex-col items-center gap-4 hover:border-neon-blue/40 transition-all group">
                  <span className="material-symbols-outlined text-3xl text-red-400 group-hover:scale-110 transition-transform">health_and_safety</span>
                  <p className="text-xs font-black uppercase tracking-widest leading-tight">Healthcare</p>
                </div>
                <div className="glass-card p-6 rounded-3xl text-center flex flex-col items-center gap-4 hover:border-neon-blue/40 transition-all group">
                  <span className="material-symbols-outlined text-3xl text-blue-400 group-hover:scale-110 transition-transform">school</span>
                  <p className="text-xs font-black uppercase tracking-widest leading-tight">Education</p>
                </div>
                <div className="glass-card p-6 rounded-3xl text-center flex flex-col items-center gap-4 hover:border-neon-blue/40 transition-all group">
                  <span className="material-symbols-outlined text-3xl text-yellow-400 group-hover:scale-110 transition-transform">account_balance_wallet</span>
                  <p className="text-xs font-black uppercase tracking-widest leading-tight">FinTech</p>
                </div>
                <div className="glass-card p-6 rounded-3xl text-center flex flex-col items-center gap-4 hover:border-neon-blue/40 transition-all group">
                  <span className="material-symbols-outlined text-3xl text-emerald-400 group-hover:scale-110 transition-transform">location_city</span>
                  <p className="text-xs font-black uppercase tracking-widest leading-tight">Smart Cities</p>
                </div>
                <div className="glass-card p-6 rounded-3xl text-center flex flex-col items-center gap-4 hover:border-neon-blue/40 transition-all group">
                  <span className="material-symbols-outlined text-3xl text-orange-400 group-hover:scale-110 transition-transform">agriculture</span>
                  <p className="text-xs font-black uppercase tracking-widest leading-tight">Agriculture</p>
                </div>
                <div className="glass-card p-6 rounded-3xl text-center flex flex-col items-center gap-4 hover:border-neon-blue/40 transition-all group">
                  <span className="material-symbols-outlined text-3xl text-purple-400 group-hover:scale-110 transition-transform">precision_manufacturing</span>
                  <p className="text-xs font-black uppercase tracking-widest leading-tight">Business Automation</p>
                </div>
                <div className="glass-card p-6 rounded-3xl text-center flex flex-col items-center gap-4 hover:border-neon-blue/40 transition-all group">
                  <span className="material-symbols-outlined text-3xl text-pink-400 group-hover:scale-110 transition-transform">diversity_1</span>
                  <p className="text-xs font-black uppercase tracking-widest leading-tight">Social Impact</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-4 bg-white/2 border-y border-white/5">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-white">How to Get Started</h2>
                <p className="text-gray-500 font-medium">Follow these 4 steps to submit your idea for Buildathon 2026</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-neon-blue/40 transition-all">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-6xl font-black italic">01</span>
                  </div>
                  <h4 className="text-lg font-black mb-4 uppercase tracking-tight text-white">Download</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">Get the official DOCX or PPTX template to structure your project proposal.</p>
                  <div className="flex flex-col gap-2">
                    <a href="/formats/Buildathon-formate.docx" download className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest bg-white/5 hover:bg-neon-blue hover:text-black p-2 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-sm">description</span>
                      DOCX Format
                    </a>
                    <a href="/formats/Buildathon-formate.pptx" download className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest bg-white/5 hover:bg-neon-blue hover:text-black p-2 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-sm">slideshow</span>
                      PPTX Format
                    </a>
                  </div>
                </div>
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-6xl font-black italic">02</span>
                  </div>
                  <h4 className="text-lg font-black mb-4 uppercase tracking-tight text-white">Prepare</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Draft your idea, architecture, and tech stack using the templates provided.</p>
                </div>
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-6xl font-black italic">03</span>
                  </div>
                  <h4 className="text-lg font-black mb-4 uppercase tracking-tight text-white">PDF Export</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Save your final proposal as a PDF for submission. Only PDF abstracts are allowed.</p>
                </div>
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-6xl font-black italic">04</span>
                  </div>
                  <h4 className="text-lg font-black mb-4 uppercase tracking-tight text-white">Register</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">Click on Register Now and upload your PDF and GitHub repo link.</p>
                  <Link to="/hackathons/submit" className="inline-block text-[9px] font-black text-center bg-neon-blue text-black p-2 rounded-lg py-3 uppercase tracking-widest hover:scale-105 transition-all">Go to Portal →</Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto glass-card rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 border-neon-blue/20 relative overflow-hidden">
              <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]"></div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="bg-primary/20 text-primary text-[10px] font-black tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-6 inline-block">Leadership Opportunity</span>
                  <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tight text-white">Become a Campus Ambassador</h2>
                  <p className="text-gray-400 mb-10 text-lg">Lead the innovation wave in your college and earn exclusive rewards for your leadership and community impact.</p>
                  <div className="space-y-6 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-neon-blue/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-neon-blue text-sm">redeem</span>
                      </div>
                      <p className="text-gray-200 font-bold">Complementary goodies to every campus ambassador with 6+ registrations</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-neon-blue/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-neon-blue text-sm">workspace_premium</span>
                      </div>
                      <p className="text-gray-200 font-bold">Certificates and shortlisted for internship interview</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-neon-blue/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-neon-blue text-sm">paid</span>
                      </div>
                      <p className="text-gray-200 font-bold">Cash rewards and goodies for top performers</p>
                    </div>
                  </div>
                  <a className="inline-block bg-white text-black px-12 py-5 rounded-full font-black hover:bg-neon-blue hover:text-black transition-all uppercase tracking-widest shadow-xl" href="https://wa.me/918421812027">
                    APPLY NOW
                  </a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-neon-blue/10 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all"></div>
                  <img alt="Ambassador Program" className="relative rounded-[2.5rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"/>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-4 max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-center mb-16 uppercase tracking-tight text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="glass-card p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all">
                <h4 className="text-xl font-black mb-3 text-white">How does the selection process work?</h4>
                <p className="text-gray-400 leading-relaxed font-medium">The hackathon has two stages: First, submit your idea for <span className="text-white">FREE</span>. After evaluation, shortlisted teams will pay a nominal <span className="text-white">₹500 registration fee</span> to compete in the final round.</p>
              </div>
              <div className="glass-card p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all">
                <h4 className="text-xl font-black mb-3 text-white">Is the hackathon online?</h4>
                <p className="text-gray-400 leading-relaxed font-medium">Yes, the entire event—from idea submission to final presentations—is 100% online. You can participate from anywhere in India.</p>
              </div>
              <div className="glass-card p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all">
                <h4 className="text-xl font-black mb-3 text-white">Who can participate?</h4>
                <p className="text-gray-400 leading-relaxed font-medium">The event is open to students across India. We welcome participants from diploma, undergraduate (BTech/BCA), and postgraduate (MCA/MTech) backgrounds. Cross-college teams are encouraged!</p>
              </div>
              <div className="glass-card p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all">
                <h4 className="text-xl font-black mb-3 text-white">Are AI tools allowed?</h4>
                <p className="text-gray-400 leading-relaxed font-medium">Absolutely. We encourage the use of AI tools (ChatGPT, GitHub Copilot, etc.) to enhance your productivity, as long as you can explain the core logic of your implementation.</p>
              </div>
              <div className="glass-card p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all">
                <h4 className="text-xl font-black mb-3 text-white">Will I get a certificate?</h4>
                <p className="text-gray-400 leading-relaxed font-medium">Yes, all teams that reach the final presentation stage will receive an official participation certificate. Top performers will also receive goodies and internship opportunities.</p>
              </div>
            </div>
          </section>

          <section className="py-32 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 -z-10"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full bg-gradient-to-b from-primary/5 to-transparent blur-3xl -z-10"></div>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight text-white">Ready to Build?</h2>
              <p className="text-2xl md:text-3xl text-neon-blue font-bold mb-14 uppercase tracking-[0.2em]">Registrations Closing Soon</p>
              <Link to="/hackathons/submit" className="inline-block bg-neon-blue text-black px-20 py-8 rounded-full text-2xl font-black shadow-[0_0_40px_rgba(0,242,255,0.4)] hover:shadow-[0_0_70px_rgba(0,242,255,0.6)] hover:scale-110 transition-all uppercase tracking-widest">
                REGISTER NOW
              </Link>
            </div>
          </section>
        </main>

        <footer className="bg-black py-20 border-t border-white/10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
              <div>
                <div className="flex items-center gap-3 text-neon-blue mb-8">
                  <span className="material-symbols-outlined text-4xl font-black">rocket_launch</span>
                  <h2 className="text-3xl font-black tracking-tight text-white uppercase">R Tech Solutions</h2>
                </div>
                <p className="text-gray-500 max-w-md text-lg leading-relaxed mb-6">
                  Leading the charge in software engineering excellence. Web & App Development | AI/ML Solutions based in India. Real Company, Real Projects, Real Judging.
                </p>
                <div className="mb-10 p-4 bg-white rounded-xl inline-block">
                  <p className="text-[8px] font-black text-black uppercase tracking-[0.2em] mb-2 opacity-60">Registered & Certified by</p>
                  <img src="/assets/msme-logo.png" alt="MSME Logo" className="h-12 w-auto object-contain" />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-neon-blue group-hover:text-black transition-all">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Support Line</p>
                      <p className="text-xl font-bold">+91 8421812027</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-neon-blue group-hover:text-black transition-all">
                      <span className="material-symbols-outlined text-xl">mail</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Official Email</p>
                      <p className="text-xl font-bold">support@rtechsolutions.online</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="glass-card p-10 rounded-[2.5rem] border-white/5 text-center md:text-left">
                  <h4 className="text-2xl font-black mb-6 uppercase text-white">Legal & Social</h4>
                  <div className="grid grid-cols-2 gap-8 text-gray-400">
                    <div className="space-y-4">
                      <Link to="/privacy-policy" className="block hover:text-neon-blue transition-colors font-bold uppercase text-xs tracking-widest">Privacy Policy</Link>
                      <Link to="/terms-conditions" className="block hover:text-neon-blue transition-colors font-bold uppercase text-xs tracking-widest">Terms of Service</Link>
                    </div>
                    <div className="space-y-4">
                      <a className="block hover:text-neon-blue transition-colors font-bold uppercase text-xs tracking-widest" href="#">LinkedIn</a>
                      <a className="block hover:text-neon-blue transition-colors font-bold uppercase text-xs tracking-widest" href="#">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-gray-600 font-medium">© 2026 R Tech Solutions India. All Rights Reserved.</p>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Official Event Landing Page</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HackathonLanding;
