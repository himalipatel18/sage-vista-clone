
import React from "react";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="col-span-1 lg:col-span-1">
            <a href="/" className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-blue-600 to-cyan-400 mr-2"></div>
              <span className="text-xl font-bold text-white">StaticHost</span>
            </a>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Simple, fast and reliable static site hosting for developers and businesses of all sizes.
            </p>
            <div className="mt-6 flex items-center">
              <Globe size={16} className="h-4 w-4 text-slate-400" />
              <span className="ml-2 text-sm text-slate-400">© 2025 StaticHost Inc.</span>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              {["Features", "Pricing", "Docs", "Changelog", "Status"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              {["About", "Blog", "Careers", "Customers", "Partners"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              {["Privacy", "Terms", "Security", "Data Processing", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section with social links */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row md:justify-between">
          <div className="flex space-x-6">
            {["Twitter", "GitHub", "LinkedIn", "YouTube"].map((social) => (
              <a key={social} href="#" className="text-slate-400 hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
          <div className="mt-6 md:mt-0">
            <select className="bg-slate-800 text-slate-300 py-1 px-2 rounded text-sm border border-slate-700">
              <option>English (US)</option>
              <option>Français</option>
              <option>Español</option>
              <option>Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
