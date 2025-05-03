
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Globe, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 md:pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            <span className="block">Lightning-fast</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              static site hosting
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Deploy and scale your static websites with ease. Our platform provides unmatched performance, 
            reliability, and developer experience for all your projects.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500">
              Start for free <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-slate-700">
              View demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-full bg-blue-50 p-3">
                <Server size={24} className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">99.99% Uptime</h3>
            <p className="mt-1 text-slate-500">Enterprise-grade reliability for your projects</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-full bg-blue-50 p-3">
                <Globe size={24} className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">Global Edge Network</h3>
            <p className="mt-1 text-slate-500">Serve content from 250+ locations worldwide</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-full bg-blue-50 p-3">
                <Zap size={24} className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">Blazing Fast</h3>
            <p className="mt-1 text-slate-500">Sub-50ms response times for optimal performance</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <div className="relative rounded-xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="bg-slate-900 h-8 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="bg-slate-100 p-6">
              <div className="h-[300px] w-[600px] bg-gradient-to-br from-white to-slate-100 rounded-lg border border-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-blue-400 h-12 w-12"></div>
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-blue-400 rounded"></div>
                        <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 opacity-20 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;
