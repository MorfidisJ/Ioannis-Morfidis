import React, { useState } from 'react';
import { Terminal, Send, CheckCircle2, AlertTriangle, RefreshCw, Copy, Check } from 'lucide-react';
import { Developer, TerminalSystemInfo } from '../data/portfolioData';
import TerminalWindow from './TerminalWindow';
import { SECTION_IDS } from '../constants/sectionIds';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', botcheck: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setFeedbackMsg('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam protection check
    if (formData.botcheck) {
      return;
    }

    // In-character but human-friendly validation
    if (!formData.name.trim()) {
      setStatus('error');
      setFeedbackMsg('> ERROR: Name is required. Please input your name to continue.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setFeedbackMsg('> ERROR: Invalid email address. Please provide a valid email syntax (e.g. name@domain.com).');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setFeedbackMsg('> ERROR: Message content is required. Please input your message or collaboration inquiry.');
      return;
    }

    setStatus('submitting');
    setFeedbackMsg('> EXECUTION_IN_PROGRESS: transmitting payload via secure TLS socket to Web3Forms...');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    if (accessKey === "YOUR_ACCESS_KEY_HERE") {
      setStatus('error');
      setFeedbackMsg('> ERROR: ACCESS_KEY_MISSING. Create a .env file with VITE_WEB3FORMS_ACCESS_KEY=your_key_here.');
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: formData.botcheck,
          subject: `Portfolio Contact from ${formData.name}`
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFeedbackMsg('> TRANSMISSION SENT // 200 OK // PAYLOAD ENCRYPTED AND DELIVERED TO MORFIDIS KERNEL.');
        setFormData({ name: '', email: '', message: '', botcheck: '' });
      } else {
        setStatus('error');
        setFeedbackMsg(`> ERROR: TRANSMISSION_FAILED. Web3Forms rejected: ${result.message || 'UNKNOWN_REASON'}`);
      }
    } catch (err) {
      setStatus('error');
      setFeedbackMsg(`> ERROR: CONNECTION_TIMEOUT. Secure socket handshake failed: ${err.message}`);
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFeedbackMsg('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(Developer.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id={SECTION_IDS.TERMINAL} className="py-24 relative min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-green/10 border border-signal-green/30 text-signal-green font-mono text-xs mb-4">
            <Terminal size={14} />
            <span>SECTION 06 // SECURE COMMUNICATION CHANNEL</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            THE TERMINAL<span className="text-signal-green">.</span>
          </h2>
          <p className="text-fog font-sans text-sm sm:text-base max-w-xl mx-auto">
            Simulated command interface backed by real semantic form elements. Autofill-ready, keyboard-operable, and WCAG AA accessible.
          </p>
        </div>

        {/* Terminal Window Container */}
        <TerminalWindow
          title="bash — initiate_contact.sh — 80x24"
          headerActions={
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-[11px] text-panel-text hover:text-white transition-colors border border-white/10 focus-visible:outline-2 focus-visible:outline-signal-yellow"
              >
                {copied ? <Check size={13} className="text-signal-green animate-pulse" /> : <Copy size={13} />}
                <span>{copied ? 'COPIED!' : 'COPY_EMAIL'}</span>
              </button>
              <span className="text-signal-green text-[11px] hidden sm:inline">{TerminalSystemInfo.prompt}</span>
            </div>
          }
          bodyClassName="p-6 sm:p-10 font-mono text-sm sm:text-base"
          footerContent={
            <div className="flex items-center gap-2 text-xs text-fog/50 font-mono">
              <span className="text-signal-green font-bold">{TerminalSystemInfo.prompt}</span>
              <span className="inline-block w-2 h-4 bg-signal-green animate-blink"></span>
            </div>
          }
        >
          {/* Introductory system text */}
          <div className="text-panel-text mb-8 space-y-1 font-mono text-xs sm:text-sm">
            <p>&gt; MORFIDIS_OS {TerminalSystemInfo.version}</p>
            <p>&gt; INITIALIZING SECURE TLS HANDSHAKE... <span className="text-signal-green">SUCCESS</span></p>
            <p>&gt; READY FOR INTERACTIVE PAYLOAD INPUT.</p>
          </div>

          {/* ARIA-LIVE REGION FOR SCREEN READERS & VISUAL FEEDBACK */}
          <div 
            aria-live="polite" 
            aria-atomic="true"
            className="mb-8 min-h-[40px] flex items-center"
          >
            {status === 'error' && (
              <div className="w-full p-4 rounded-xl bg-rose-950/40 border border-rose-500/50 text-rose-400 flex items-start gap-3 animate-fade-in text-xs sm:text-sm shadow-lg">
                <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                <span className="font-bold tracking-wide">{feedbackMsg}</span>
              </div>
            )}

            {status === 'submitting' && (
              <div className="w-full p-4 rounded-xl bg-amber-950/40 border border-amber-500/50 text-amber-300 flex items-center gap-3 animate-fade-in text-xs sm:text-sm">
                <RefreshCw size={18} className="animate-spin shrink-0" />
                <span>{feedbackMsg}</span>
              </div>
            )}

            {status === 'success' && (
              <div className="w-full p-5 rounded-xl bg-emerald-950/60 border border-signal-green text-signal-green flex items-start gap-3 animate-fade-in text-xs sm:text-sm shadow-[0_0_30px_rgba(57,255,136,0.2)]">
                <CheckCircle2 size={20} className="shrink-0 mt-0.5 text-signal-green animate-bounce" />
                <div className="space-y-1">
                  <div className="font-extrabold tracking-wider uppercase text-base animate-pulse">
                    [!! TRANSMISSION SENT // 200 OK !!]
                  </div>
                  <p className="text-panel-text text-xs font-sans">
                    Thank you for reaching out. Your message payload has been logged directly into Ioannis Morfidis' priority queue.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded bg-signal-green/20 hover:bg-signal-green/30 text-signal-green text-xs font-bold border border-signal-green/40 transition-colors focus-visible:outline-2 focus-visible:outline-signal-yellow"
                  >
                    <RefreshCw size={12} />
                    <span>NEW_TRANSMISSION</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* FORM: Real semantic HTML elements styled as CLI */}
          {status !== 'success' && (
            <form onSubmit={handleSubmit} aria-label="Contact form" className="space-y-6">
              
              {/* Honeypot Spam Protection Field (Invisible to human users) */}
              <input
                type="text"
                name="botcheck"
                tabIndex="-1"
                autoComplete="off"
                style={{ display: 'none' }}
                value={formData.botcheck}
                onChange={handleInputChange}
                aria-hidden="true"
              />

              {/* NAME FIELD */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-signal-green font-bold tracking-wide flex items-center gap-2">
                  <span>&gt; ENTER_NAME:</span>
                  <span className="text-xs text-panel-text/60 font-normal">[required // autocomplete="name"]</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-signal-green font-bold">&gt;</span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Chen"
                    className="w-full bg-black/50 border border-white/15 hover:border-white/30 rounded-xl pl-9 pr-4 py-3.5 text-white font-mono focus:border-signal-yellow focus:ring-1 focus:ring-signal-yellow focus:outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              {/* EMAIL FIELD */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-signal-green font-bold tracking-wide flex items-center gap-2">
                  <span>&gt; ENTER_EMAIL:</span>
                  <span className="text-xs text-panel-text/60 font-normal">[required // autocomplete="email"]</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-signal-green font-bold">&gt;</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. alex.chen@company.com"
                    className="w-full bg-black/50 border border-white/15 hover:border-white/30 rounded-xl pl-9 pr-4 py-3.5 text-white font-mono focus:border-signal-yellow focus:ring-1 focus:ring-signal-yellow focus:outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              {/* MESSAGE FIELD */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-signal-green font-bold tracking-wide flex items-center gap-2">
                  <span>&gt; ENTER_MESSAGE:</span>
                  <span className="text-xs text-panel-text/60 font-normal">[required // multiline payload]</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-4 text-signal-green font-bold">&gt;</span>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message or collaboration inquiry here..."
                    className="w-full bg-black/50 border border-white/15 hover:border-white/30 rounded-xl pl-9 pr-4 py-3.5 text-white font-mono focus:border-signal-yellow focus:ring-1 focus:ring-signal-yellow focus:outline-none transition-all placeholder:text-white/20 resize-y"
                  ></textarea>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-panel-text/60">
                  <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse"></span>
                  <span>READY TO EXECUTE SCRIPT</span>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-signal-green hover:bg-signal-yellow text-void font-mono font-extrabold text-sm tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(57,255,136,0.4)] hover:shadow-[0_0_30px_rgba(246,230,66,0.6)] focus-visible:outline-2 focus-visible:outline-signal-yellow disabled:opacity-50 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 group"
                >
                  <span>&gt; EXECUTE: initiate_contact.sh</span>
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </form>
          )}
        </TerminalWindow>

      </div>
    </section>
  );
}
