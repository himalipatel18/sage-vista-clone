
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Hobby",
    price: "$0",
    description: "Perfect for personal projects and experiments.",
    features: [
      "1 site",
      "HTTPS/SSL included",
      "Continuous deployment",
      "Basic analytics",
      "Community support",
      "100GB bandwidth/month"
    ],
    cta: "Start for free",
    popular: false
  },
  {
    name: "Pro",
    price: "$12",
    description: "For professionals and growing businesses.",
    features: [
      "10 sites",
      "Custom domains",
      "Team collaboration",
      "Advanced analytics",
      "Form handling",
      "500GB bandwidth/month",
      "Email support"
    ],
    cta: "Get started",
    popular: true
  },
  {
    name: "Business",
    price: "$49",
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited sites",
      "Enterprise SSO",
      "Advanced security",
      "Custom branding",
      "Priority support",
      "2TB bandwidth/month",
      "99.99% uptime SLA"
    ],
    cta: "Contact sales",
    popular: false
  }
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mt-8">
          <div className="relative flex items-center p-1 rounded-full bg-slate-100">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                !annual ? "bg-white shadow-sm text-slate-900" : "text-slate-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                annual ? "bg-white shadow-sm text-slate-900" : "text-slate-500"
              }`}
            >
              Annual (save 20%)
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border ${
                plan.popular
                  ? "border-blue-200 bg-blue-50 shadow-lg shadow-blue-100"
                  : "border-slate-200 bg-white"
              } overflow-hidden relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-xs font-medium px-3 py-1 tracking-wider uppercase">
                  Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 ml-2">/month</span>
                </div>
                <p className="mt-2 text-slate-500">{plan.description}</p>
                <Button
                  className={`mt-6 w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-500"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
              <div className="px-6 pb-8 pt-2 md:px-8">
                <p className="text-sm font-medium text-slate-700 mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <Check
                        size={16}
                        className={`h-4 w-4 mr-3 ${
                          plan.popular ? "text-blue-600" : "text-slate-700"
                        }`}
                      />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mt-16 text-center">
          <p className="text-slate-500">
            Need something more specific?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
