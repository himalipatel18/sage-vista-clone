
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ctaSectionRef.current) return;
      
      const { left, top, width, height } = ctaSectionRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      // Update the gradient position based on mouse position
      ctaSectionRef.current.style.setProperty('--x', `${x * 100}%`);
      ctaSectionRef.current.style.setProperty('--y', `${y * 100}%`);
    };
    
    const section = ctaSectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  
  return (
    <section className="py-24 bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          ref={ctaSectionRef}
          className="relative rounded-3xl bg-dark-accent overflow-hidden border border-gray-800"
          style={{
            '--x': '50%',
            '--y': '50%',
          } as React.CSSProperties}
        >
          {/* Interactive gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-orange-300/30 opacity-50"
               style={{
                 background: 'radial-gradient(circle at var(--x) var(--y), rgba(255, 95, 31, 0.5) 0%, rgba(255, 127, 80, 0.2) 25%, rgba(0, 0, 0, 0) 50%)',
               }}></div>
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 800 800">
              <defs>
                <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#small-grid)" />
            </svg>
          </div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute bg-orange-500/30 rounded-full"
                style={{
                  width: `${Math.random() * 6 + 3}px`,
                  height: `${Math.random() * 6 + 3}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
          
          <div className="relative px-6 py-16 sm:px-12 sm:py-20 md:py-28 lg:px-16 z-10">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to simplify your hosting workflow?
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                  Join thousands of developers who have already made the switch to StaticHost.
                  Get started for free, no credit card required.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:shrink-0">
                <Button size="lg" className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white shadow-lg shadow-orange-500/20 group">
                  <span className="absolute inset-0 w-full h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-out"></span>
                  <span className="relative flex items-center">
                    Get started for free <ArrowRight size={16} className="ml-2" />
                  </span>
                </Button>
              </div>
            </div>
            
            {/* Feature badges */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              {['No credit card', 'Cancel anytime', '24/7 support', 'Global CDN'].map((item) => (
                <div key={item} className="flex items-center space-x-1 px-3 py-1 bg-dark/80 backdrop-blur-sm rounded-full border border-gray-800">
                  <Sparkles size={12} className="text-orange-500" />
                  <span className="text-xs text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
