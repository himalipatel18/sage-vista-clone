
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden">
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
          
          <div className="relative px-6 py-16 sm:px-12 sm:py-20 md:py-28 lg:px-16">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to simplify your hosting workflow?
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Join thousands of developers who have already made the switch to StaticHost.
                  Get started for free, no credit card required.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:shrink-0">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get started for free <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
