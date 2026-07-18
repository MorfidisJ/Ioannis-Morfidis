import React from 'react';

export default function TerminalWindow({
  title,
  headerActions,
  children,
  className = '',
  bodyClassName = 'p-6 sm:p-10 font-mono text-sm sm:text-base',
  footerContent,
}) {
  return (
    <div className={`glass-panel border-white/20 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative bg-void/95 ${className}`}>
      {/* Window Header Chrome */}
      <div className="bg-black/60 px-5 py-3.5 border-b border-white/15 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          {title && <span className="ml-2 text-fog/80 truncate">{title}</span>}
        </div>
        {headerActions && (
          <div className="flex items-center gap-3 shrink-0 ml-2">
            {headerActions}
          </div>
        )}
      </div>

      {/* Terminal Body */}
      <div className={bodyClassName}>
        {children}
      </div>

      {/* Optional Terminal Footer */}
      {footerContent && (
        <div className="bg-black/40 px-6 py-3 border-t border-white/10 font-mono text-xs text-fog/60">
          {footerContent}
        </div>
      )}
    </div>
  );
}
