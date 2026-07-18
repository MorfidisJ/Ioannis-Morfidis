import React from 'react';
import { AlertTriangle, RefreshCw, Terminal } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught runtime error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center p-6 bg-void text-fog font-mono">
          <div className="glass-panel border-rose-500/30 max-w-2xl w-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-void/95">
            <div className="bg-black/60 px-5 py-3.5 border-b border-rose-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="ml-2 text-rose-400 font-bold">SYSTEM_CRITICAL_EXCEPTION</span>
              </div>
              <span className="text-xs text-rose-400/80">KERNEL PANIC</span>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3 text-rose-400 font-bold text-lg">
                <AlertTriangle size={24} />
                <span>&gt; RUNTIME RENDERING EXCEPTION</span>
              </div>
              <p className="text-panel-text text-sm font-sans">
                An unexpected error occurred while executing UI rendering instructions. The component boundary has contained the exception to prevent full system crash.
              </p>
              {this.state.error && (
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs text-rose-300 overflow-x-auto">
                  <code>{this.state.error.toString()}</code>
                </div>
              )}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-fog/60 flex items-center gap-1.5">
                  <Terminal size={14} className="text-signal-yellow" />
                  <span>MORFIDIS.OS RECOVERY</span>
                </span>
                <button
                  type="button"
                  onClick={this.handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-signal-yellow text-void font-bold text-xs hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-signal-yellow"
                >
                  <RefreshCw size={14} />
                  <span>REBOOT_SYSTEM</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
