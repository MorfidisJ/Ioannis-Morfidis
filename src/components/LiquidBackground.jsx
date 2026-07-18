import React from 'react';

export default function LiquidBackground() {
  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-void select-none"
      aria-hidden="true"
    >
      {/* Base grid pattern for terminal texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Sphere 1: Emerald/Green Cyberpunk Liquid */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-20 animate-float-1 motion-reduce:animate-none bg-radial-emerald"
      />

      {/* Sphere 2: Deep Cyan/Blue Glass Liquid */}
      <div 
        className="absolute top-[30%] -right-[15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full blur-[140px] opacity-15 animate-float-2 motion-reduce:animate-none bg-radial-cyan"
      />

      {/* Sphere 3: Subtle Yellow Accent Glow at bottom */}
      <div 
        className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full blur-[130px] opacity-10 animate-float-1 motion-reduce:animate-none bg-radial-yellow"
      />

      {/* Dark vignette overlay for contrast floor assurance */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/80" />
    </div>
  );
}
