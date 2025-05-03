
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "StaticHost has transformed our workflow. The speed and reliability of their platform has cut our deployment time by 80%.",
    author: "Alex Johnson",
    title: "CTO, TechDynamics",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "The simplicity of using StaticHost has been game-changing for our team. We can focus on developing while they handle the infrastructure.",
    author: "Sarah Chen",
    title: "Lead Developer, CreativeWeb",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "I've tried several static hosting providers, but StaticHost's performance and intuitive interface are unmatched. Highly recommended!",
    author: "Marcus Williams",
    title: "Freelance Web Developer",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Trusted by developers worldwide
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Join thousands of developers and companies who rely on StaticHost for their hosting needs.
          </p>
        </div>

        {/* Logo cloud */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-12 w-32 bg-slate-200 rounded opacity-60"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="rounded-2xl bg-slate-50 p-8 shadow-sm border border-slate-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-slate-700">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 md:p-12 text-white">
          <div className="grid gap-y-8 md:grid-cols-3 md:gap-x-8">
            <div className="text-center">
              <div className="text-5xl font-bold">99.99%</div>
              <div className="mt-2 text-blue-100">Uptime guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold">15,000+</div>
              <div className="mt-2 text-blue-100">Websites deployed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold">250+</div>
              <div className="mt-2 text-blue-100">Edge locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
