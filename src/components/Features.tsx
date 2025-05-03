
import React from "react";
import { 
  Server, 
  Globe, 
  Zap, 
  Lock, 
  Code, 
  RefreshCw, 
  GitBranch, 
  LineChart, 
  Wand2
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global CDN",
    description: "Deploy your static sites to our global network of edge servers for lightning-fast load times worldwide.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description: "Connect your GitHub, GitLab, or Bitbucket repositories for automatic deployments on every push.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: RefreshCw,
    title: "Instant Rollbacks",
    description: "Revert to any previous deployment with a single click, ensuring you can quickly fix issues.",
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    icon: Lock,
    title: "SSL Encryption",
    description: "Free SSL certificates are automatically provisioned and renewed for all your sites.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: LineChart,
    title: "Analytics",
    description: "Get detailed insights into your site's traffic, performance metrics, and user behavior.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Wand2,
    title: "Custom Domains",
    description: "Use your own domain names with easy DNS configuration and management tools.",
    color: "bg-amber-50 text-amber-600"
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Everything you need to deploy static sites
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-3xl mx-auto">
            Our platform combines simplicity with powerful features, giving you the tools to deploy
            and manage static sites with confidence.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`rounded-lg ${feature.color} p-3 inline-block`}>
                <feature.icon size={24} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature showcase */}
        <div className="mt-24 rounded-2xl bg-slate-50 p-8 md:p-12 lg:flex lg:items-center lg:gap-x-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              Deploy with confidence
            </h3>
            <p className="mt-4 text-lg text-slate-500">
              Our platform handles the complexity of modern web deployments, giving you more time
              to focus on building great experiences.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <div className="rounded-full bg-blue-50 p-1">
                  <Zap size={16} className="h-4 w-4 text-blue-600" />
                </div>
                <span className="ml-3 text-slate-700">Automated builds and deployments</span>
              </li>
              <li className="flex items-center">
                <div className="rounded-full bg-blue-50 p-1">
                  <Zap size={16} className="h-4 w-4 text-blue-600" />
                </div>
                <span className="ml-3 text-slate-700">Preview deployments for PRs</span>
              </li>
              <li className="flex items-center">
                <div className="rounded-full bg-blue-50 p-1">
                  <Zap size={16} className="h-4 w-4 text-blue-600" />
                </div>
                <span className="ml-3 text-slate-700">Serverless functions support</span>
              </li>
              <li className="flex items-center">
                <div className="rounded-full bg-blue-50 p-1">
                  <Zap size={16} className="h-4 w-4 text-blue-600" />
                </div>
                <span className="ml-3 text-slate-700">Environment variables and secrets</span>
              </li>
            </ul>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <div className="rounded-xl bg-white shadow-md p-6 border border-slate-200">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-slate-800 rounded-lg p-4 text-sm font-mono text-green-400">
                <div className="opacity-70">$ statichost deploy</div>
                <div className="mt-2">✓ Preparing build...</div>
                <div>✓ Analyzing source files...</div>
                <div>✓ Building site...</div>
                <div>✓ Optimizing assets...</div>
                <div>✓ Uploading to CDN...</div>
                <div className="mt-2">🚀 Success! Deployed to:</div>
                <div className="text-blue-400">https://your-site.statichost.app</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
