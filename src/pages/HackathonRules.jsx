import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HackathonRules = () => {
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
        .sticky-nav-link.active {
            color: var(--neon-blue);
            border-left-color: var(--neon-blue);
            background: rgba(0, 242, 255, 0.05);
        }
        html {
            scroll-behavior: smooth;
        }
      `}</style>

      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <header className="relative pt-20 pb-12 px-4 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-48 -left-48 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[100px]"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Official Document v1.0</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase text-white">
              Buildathon <span className="gradient-text">2026</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-widest">Official Rules & Guidelines</p>
            <div className="mt-8 flex justify-center gap-4">
              <a className="text-xs font-bold px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all uppercase tracking-wider" href="#team-rules">Start Reading</a>
              <Link to="/hackathons/submit" className="text-xs font-bold px-6 py-2 bg-neon-blue text-black rounded-full hover:opacity-90 transition-all uppercase tracking-wider">Register Now</Link>
            </div>
          </div>
        </header>

        <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-12 space-y-1">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6 px-4">Navigation Index</p>
              <a className="sticky-nav-link flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-400 border-l-2 border-transparent hover:text-white transition-all" href="#team-rules">
                <span className="material-symbols-outlined text-lg">groups</span> Team Rules
              </a>
              <a className="sticky-nav-link flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-400 border-l-2 border-transparent hover:text-white transition-all" href="#mode">
                <span className="material-symbols-outlined text-lg">public</span> Mode & Location
              </a>
              <a className="sticky-nav-link flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-400 border-l-2 border-transparent hover:text-white transition-all" href="#registration">
                <span className="material-symbols-outlined text-lg">payments</span> Entry Fee
              </a>
              <a className="sticky-nav-link flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-400 border-l-2 border-transparent hover:text-white transition-all" href="#domains">
                <span className="material-symbols-outlined text-lg">category</span> Problem Domains
              </a>
              <a className="sticky-nav-link flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-400 border-l-2 border-transparent hover:text-white transition-all" href="#tech-stack">
                <span className="material-symbols-outlined text-lg">code</span> Tech Stack & AI
              </a>
              <a className="sticky-nav-link flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-400 border-l-2 border-transparent hover:text-white transition-all" href="#submission">
                <span className="material-symbols-outlined text-lg">cloud_upload</span> Submission
              </a>
              <a className="sticky-nav-link flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-400 border-l-2 border-transparent hover:text-white transition-all" href="#evaluation">
                <span className="material-symbols-outlined text-lg">analytics</span> Evaluation
              </a>
              <a className="sticky-nav-link flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-400 border-l-2 border-transparent hover:text-white transition-all" href="#prizes">
                <span className="material-symbols-outlined text-lg">emoji_events</span> Prizes & Certs
              </a>
              <a className="sticky-nav-link flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-400 border-l-2 border-transparent hover:text-white transition-all" href="#conduct">
                <span className="material-symbols-outlined text-lg">gavel</span> Code of Conduct
              </a>
            </nav>
          </aside>

          <main className="lg:col-span-9 space-y-24 pb-32">
            <section className="scroll-mt-12" id="team-rules">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-neon-blue/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-neon-blue">groups</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white">Team Rules</h2>
              </div>
              <div className="glass-card rounded-3xl p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-black text-neon-blue uppercase text-sm tracking-widest">Composition</h4>
                    <p className="text-gray-400 leading-relaxed">Teams must consist of <strong>1 to 4 members</strong>. Solo participants are permitted and will be treated as a single-member team.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-neon-blue uppercase text-sm tracking-widest">Eligibility</h4>
                    <p className="text-gray-400 leading-relaxed">Cross-college teams are <strong>fully allowed</strong>. Participants must be currently enrolled in Diploma, BTech, MCA, or related technical degrees.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-mt-12" id="mode">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-neon-blue/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-neon-blue">public</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white">Event Mode</h2>
              </div>
              <div className="glass-card rounded-3xl p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="text-center md:text-left">
                    <p className="text-4xl font-black mb-2">100% ONLINE</p>
                    <p className="text-gray-400 leading-relaxed">Build from anywhere in the world. All interactions, submissions, and demonstrations will be conducted through our digital platform and video conferencing tools.</p>
                  </div>
                  <div className="hidden md:block w-px h-24 bg-white/10"></div>
                  <div className="text-center md:text-left">
                    <p className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-2">Duration</p>
                    <p className="text-2xl font-black">ONLINE EVENT</p>
                    <p className="text-xs text-gray-500 mt-1 italic font-medium">Timeline shared via email</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-mt-12" id="registration">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-neon-blue/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-neon-blue">payments</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white">Entry & Registration</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card p-8 rounded-3xl border-primary/20">
                  <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">Registration Fee</p>
                  <p className="text-4xl font-black mb-2">₹500</p>
                  <p className="text-sm text-gray-400">Flat rate per team</p>
                </div>
                <div className="md:col-span-2 glass-card p-8 rounded-3xl">
                  <h4 className="font-black text-white uppercase text-sm tracking-widest mb-4">Refund Policy</h4>
                  <ul className="space-y-3 text-gray-400 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-500 text-lg">cancel</span>
                      <span>The entry fee is <strong>non-refundable</strong> under normal circumstances.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                      <span>Refunds will only be issued if the event is officially cancelled by R Tech Solutions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="scroll-mt-12" id="domains">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-neon-blue/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-neon-blue">category</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white">Problem Domains</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 text-center border-white/5">
                  <span className="material-symbols-outlined text-red-400 text-2xl">health_and_safety</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Healthcare</span>
                </div>
                <div className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 text-center border-white/5">
                  <span className="material-symbols-outlined text-blue-400 text-2xl">school</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Education</span>
                </div>
                <div className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 text-center border-white/5">
                  <span className="material-symbols-outlined text-yellow-400 text-2xl">account_balance_wallet</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">FinTech</span>
                </div>
                <div className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 text-center border-white/5">
                  <span className="material-symbols-outlined text-emerald-400 text-2xl">location_city</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Smart Cities</span>
                </div>
                <div className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 text-center border-white/5">
                  <span className="material-symbols-outlined text-orange-400 text-2xl">agriculture</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Agriculture</span>
                </div>
                <div className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 text-center border-white/5">
                  <span className="material-symbols-outlined text-purple-400 text-2xl">precision_manufacturing</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Automation</span>
                </div>
                <div className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 text-center border-white/5 md:col-span-2">
                  <span className="material-symbols-outlined text-pink-400 text-2xl">diversity_1</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Social Impact</span>
                </div>
              </div>
            </section>

            <section className="scroll-mt-12" id="tech-stack">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-neon-blue/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-neon-blue">code</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white">Tech Stack & AI Usage</h2>
              </div>
              <div className="space-y-8">
                <div className="glass-card p-8 rounded-3xl">
                  <h4 className="font-black text-white uppercase text-sm tracking-widest mb-6">Approved Technology Tracks</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-xs font-black text-neon-blue mb-1">MOBILE</p>
                      <p className="font-bold">Android / Java</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-xs font-black text-neon-blue mb-1">WEB</p>
                      <p className="font-bold">MERN Stack</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-xs font-black text-neon-blue mb-1">DATA SCIENCE</p>
                      <p className="font-bold">AI-ML / Python</p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                  <div className="flex items-start gap-6">
                    <span className="material-symbols-outlined text-4xl text-primary">psychology</span>
                    <div className="space-y-4">
                      <h4 className="text-2xl font-black uppercase tracking-tight text-white">AI Integration Rules</h4>
                      <p className="text-gray-300 leading-relaxed">
                        <strong className="text-white">AI is NOT compulsory.</strong> However, meaningful AI integration will be given higher consideration during the final scoring process.
                      </p>
                      <p className="text-sm text-gray-400 italic">
                        Use of AI tools like ChatGPT or Copilot is allowed, but teams must be able to demonstrate a full understanding of any generated code or components during the demo session.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-8 rounded-3xl border-red-500/20">
                  <h4 className="font-black text-red-500 uppercase text-sm tracking-widest mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">warning</span> Originality & Plagiarism
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    No pre-existing projects are allowed. Any team found using projects built prior to the hackathon window will be <strong>disqualified immediately</strong> without refund. Code originality will be cross-verified using industry-standard tools.
                  </p>
                </div>
              </div>
            </section>

            <section className="scroll-mt-12" id="submission">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-neon-blue/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-neon-blue">cloud_upload</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white">Submission Requirements</h2>
              </div>
              
              {/* Instructions Section */}
              <div className="mb-12 glass-card rounded-3xl p-8 border-neon-blue/10">
                <h4 className="text-sm font-black text-neon-blue uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">info</span>
                  Preparation Instructions
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-blue text-black text-[10px] font-black flex items-center justify-center">01</span>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium">Download the official <strong className="text-white">DOCX or PPTX template</strong> below to structure your idea.</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-blue text-black text-[10px] font-black flex items-center justify-center">02</span>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium">Fill in your team details, technical architecture, and <strong className="text-white">problem-solving approach</strong>.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-blue text-black text-[10px] font-black flex items-center justify-center">03</span>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium">Export your final proposal as a <strong className="text-white">PDF file</strong>. Only PDF abstracts are accepted.</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-blue text-black text-[10px] font-black flex items-center justify-center">04</span>
                      <p className="text-xs text-gray-400 leading-relaxed font-medium">Submit the PDF along with your <strong className="text-white">GitHub repository link</strong> in the registration portal.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-neon-blue">data_object</span>
                  </div>
                  <div>
                    <p className="font-black text-white uppercase text-xs tracking-widest mb-1">GitHub Repo</p>
                    <p className="text-xs text-gray-500">Public repository with regular commits as proof of work.</p>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-neon-blue">description</span>
                  </div>
                  <div>
                    <p className="font-black text-white uppercase text-xs tracking-widest mb-1">Problem Doc</p>
                    <p className="text-xs text-gray-500">Detailed document outlining the problem and proposed solution.</p>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-neon-blue">videocam</span>
                  </div>
                  <div>
                    <p className="font-black text-white uppercase text-xs tracking-widest mb-1">Demo Video</p>
                    <p className="text-xs text-gray-500">A 3-minute video pitch showcasing the working prototype.</p>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 border-neon-blue/20 bg-neon-blue/5 group">
                  <div className="w-10 h-10 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-neon-blue">download</span>
                  </div>
                  <div>
                    <p className="font-black text-white uppercase text-xs tracking-widest mb-2">Templates</p>
                    <div className="flex flex-col gap-2">
                      <a href="/formats/Buildathon-formate.docx" download className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest bg-white/5 hover:bg-neon-blue hover:text-black p-1.5 rounded-lg transition-all">
                        <span className="material-symbols-outlined text-sm">description</span>
                        DOCX
                      </a>
                      <a href="/formats/Buildathon-formate.pptx" download className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest bg-white/5 hover:bg-neon-blue hover:text-black p-1.5 rounded-lg transition-all">
                        <span className="material-symbols-outlined text-sm">slideshow</span>
                        PPTX
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-mt-12" id="evaluation">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-neon-blue/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-neon-blue">analytics</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white">Evaluation Criteria</h2>
              </div>
              <div className="glass-card p-10 rounded-[2.5rem] border-primary/20">
                <div className="grid md:grid-cols-2 gap-12">
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
                  </div>
                  <div className="space-y-6">
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
            </section>

            <section className="scroll-mt-12" id="prizes">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-neon-blue/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-neon-blue">emoji_events</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white">Prizes & Recognition</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-3xl border-neon-blue/20">
                  <p className="text-xs font-black text-neon-blue uppercase tracking-widest mb-4">Cash Rewards</p>
                  <h4 className="text-3xl font-black mb-4">₹30,000 Pool</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">Direct cash prizes for winners. Pool scales based on total registrations.</p>
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <span className="material-symbols-outlined text-lg">stars</span>
                    <span>Special awards for best UI and best AI usage.</span>
                  </div>
                </div>
                <div className="glass-card p-8 rounded-3xl">
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Certifications</p>
                  <h4 className="text-3xl font-black mb-4">Global Recognition</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="material-symbols-outlined text-neon-blue">workspace_premium</span>
                      <span>Participation certificates for ALL valid submissions.</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="material-symbols-outlined text-neon-blue">assignment_ind</span>
                      <span>Internship opportunities for top performers at R Tech Solutions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="scroll-mt-12" id="conduct">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-neon-blue/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-neon-blue">gavel</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white">Code of Conduct</h2>
              </div>
              <div className="glass-card p-8 rounded-3xl space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    R Tech Solutions is committed to providing a harassment-free experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/2 rounded-xl border border-white/5">
                      <p className="font-bold text-white mb-2">Be Respectful</p>
                      <p className="text-xs text-gray-500 leading-relaxed">Communicate professionally with fellow participants and judges.</p>
                    </div>
                    <div className="p-4 bg-white/2 rounded-xl border border-white/5">
                      <p className="font-bold text-white mb-2">Fair Play</p>
                      <p className="text-xs text-gray-500 leading-relaxed">Plagiarism, harassment, or attempt to game the submission system results in a ban.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <section className="py-24 px-4 bg-white/2 border-t border-white/5 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-white">Got everything?</h2>
            <p className="text-lg text-gray-400 mb-12">Make sure you have read and understood all the guidelines before proceeding with registration.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/hackathons/submit" className="w-full sm:w-auto bg-neon-blue text-black px-12 py-5 rounded-full font-black text-lg shadow-[0_0_30px_rgba(0,242,255,0.3)] hover:scale-105 transition-all uppercase tracking-widest">
                REGISTER NOW
              </Link>
              <a className="w-full sm:w-auto border border-white/10 hover:bg-white/5 text-white px-10 py-5 rounded-full font-bold transition-all uppercase tracking-widest" href="https://wa.me/918421812027">
                ASK A QUESTION
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-black py-12 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-neon-blue">
                <span className="material-symbols-outlined font-black">rocket_launch</span>
                <span className="text-white font-black uppercase tracking-widest text-sm">R Tech Solutions</span>
              </div>
              <div className="p-2 bg-white rounded-lg inline-block w-fit">
                <img src="/assets/msme-logo.png" alt="MSME Logo" className="h-8 w-auto grayscale group-hover:grayscale-0 transition-all opacity-80" />
              </div>
            </div>
            <p className="text-sm text-gray-600 font-medium">© 2026 R Tech Solutions India. Buildathon 2026 Official Rules & Guidelines.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-neon-blue transition-colors">Privacy</Link>
              <Link to="/terms-conditions" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-neon-blue transition-colors">Terms</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HackathonRules;
