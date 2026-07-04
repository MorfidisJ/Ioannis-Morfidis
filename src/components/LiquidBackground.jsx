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
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-20 animate-float-1"
        style={{
          background: 'radial-gradient(circle, rgba(57,255,136,0.4) 0%, rgba(5,5,5,0) 70%)'
        }}
      />

      {/* Sphere 2: Deep Cyan/Blue Glass Liquid */}
      <div 
        className="absolute top-[30%] -right-[15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full blur-[140px] opacity-15 animate-float-2"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.3) 0%, rgba(5,5,5,0) 70%)'
        }}
      />

      {/* Sphere 3: Subtle Yellow Accent Glow at bottom */}
      <div 
        className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full blur-[130px] opacity-10 animate-float-1"
        style={{
          background: 'radial-gradient(circle, rgba(246,230,66,0.3) 0%, rgba(5,5,5,0) 70%)'
        }}
      />

      {/* Dark vignette overlay for contrast floor assurance */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/80" />
    </div>
  );
}
