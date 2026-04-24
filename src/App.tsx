import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  ScrollRestoration,
} from "react-router-dom";
import { cn } from "./lib/utils";
import Logo from "./components/logo";
import { HomeSection } from "./components/HomeSection";
import { AboutSection } from "./components/AboutSection";
import { PricingSection } from "./components/PricingSection";
import { CoverageSection } from "./components/CoverageSection";
import { SupportSection } from "./components/SupportSection";
import { StatusSection } from "./components/StatusSection";
import { TermsSection } from "./components/TermsSection";
import { ScrollToTop } from "./lib/scrolltoTop";

declare global {
  interface Window {
    VANTA: any;
  }
}

function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPathName = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    return path.replace("/", "");
  };

  const activeTab = getPathName();

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "plans", label: "Plans", path: "/plans" },
    { id: "coverage", label: "Locations", path: "/coverage" },
    { id: "support", label: "Contact", path: "/support" },
    { id: "status", label: "Status", path: "/status" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 transition-all duration-500 border-b py-3",
        scrolled
          ? "w-[80%] left-0 right-0 mx-auto rounded-[20px] bg-white backdrop-blur-xl border-slate-200 shadow-lg top-4"
          : "w-full bg-white border-slate-100 left-0 right-0 mx-auto",
      )}
    >
      <div className="flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto">
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="cursor-pointer hover:opacity-80 transition-all flex items-center"
        >
          <Logo className="h-8 md:h-10 w-auto text-primary" />
        </Link>

        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 ">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "text-xs tracking-widest uppercase transition-all duration-600 relative py-1",
                activeTab === item.id
                  ? "text-accent font-bold"
                  : "text-primary/60 hover:text-primary",
              )}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.div
                  layoutId="nav-line"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent/0"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <Link
            to="/support"
            onClick={() => setIsMenuOpen(false)}
            className="hidden sm:block bg-primary text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-[10px] sm:text-xs uppercase tracking-widest transform active:scale-95 transition-transform shadow-[0_4px_15px_rgba(26,17,67,0.2)] hover:bg-accent hover:text-primary"
          >
            Get Connected
          </Link>
          <button
            className="lg:hidden p-2 text-primary hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-left text-sm font-bold uppercase tracking-widest transition-all py-2 border-b border-transparent",
                    activeTab === item.id
                      ? "text-accent border-accent/20"
                      : "text-primary/60 hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="tel:+254791198551"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest mt-4 text-center block"
              >
                Get Connected Now
              </Link>

              <div className="pt-8 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                  Support Hotlines
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-primary">0718176143</p>
                  <p className="text-sm font-bold text-primary">0791198551</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navigation />
      <main className="transition-all duration-1000">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={location.pathname}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomeSection />}  />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/plans" element={<PricingSection />} />
              <Route
                path="/coverage"
                element={<CoverageSection staggered={false} />}
              />
              <Route path="/support" element={<SupportSection />} />
              <Route path="/status" element={<StatusSection />} />
              <Route path="/terms" element={<TermsSection />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white h-full pt-20 border-t border-white/5">
        <div className="px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
            <div className="space-y-6">
              <Link
                to="/"
                className="cursor-pointer hover:opacity-80 transition-all"
              >
                <Logo className="h-10 w-auto text-white invert brightness-0 -mt-5 mb-5" />
              </Link>
            </div>

          <div className="space-y-6">
            <h4 className="font-bold text-accent uppercase tracking-widest text-xs">
              About Us
            </h4>
            <p className="text-slate-400 max-w-xs leading-relaxed text-xs">
                 At Bonkelinks, we believe internet access should be fast, reliable, and affordable. We are committed to connecting homes, businesses, and communities, especially in marginalized areas, with quality internet solutions designed to keep people productive, informed, and connected.
              </p></div>

         

            <div className="space-y-6">
              <h4 className="font-bold text-accent uppercase tracking-widest text-xs">
                Navigation
              </h4>
              <ul className="space-y-3 text-slate-400 text-xs">
                <li>
                  <Link
                    to="/hotspot"
                    className="hover:text-white transition-all "
                  >
                    Plans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/coverage"
                    className="hover:text-white transition-all"
                  >
                    Coverage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-white transition-all"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-accent uppercase tracking-widest text-xs">
                Connect
              </h4>
              <div className="flex gap-4 text-xs">
                <Link
                  to={"https://www.tiktok.com/@bonkelinksinternet"}
                  target="_blank"
                >
                  {" "}
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="fill-accent w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>TikTok</title>
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </Link>
              </div>
              <p className="text-slate-400 text-sm font-light">
                +254 718 176 143 <br /> +254 791 198 551
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-accent uppercase tracking-widest text-xs">
                Headquarters
              </h4>
              <div className="rounded-lg overflow-hidden border border-white/10 h-70 w-70">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7221560356456!2d36.88339007588701!3d-1.2642769987236957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15e7f0f5e913%3A0xf0229143cc50f49f!2sCannon%20Plaza!5e0!3m2!1sen!2sus!4v1776794126964!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        <div className="flex flex-row items-start justify-between lg:text-xs text-[10px]">
          <p className="text-slate-400 text-center">
            © {new Date().getFullYear()} Bonkelinks All rights reserved.
          </p>
          <div className=" text-slate-400 lg:px-10 space-x-2">
          <Link to="/terms" className="hover:text-white transition-all">
              Terms of Service  |
            </Link> 
            <Link to="/status" className="hover:text-white transition-all">
              Network Status
            </Link>
          </div>
        </div>
        <p className="text-xs text-slate-400 text-center py-3"><a href="https://ciaportfolios.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent underline text-xs font-medium">
            @CiaDo
          </a> Made it! </p>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-accent/30 selection:text-white bg-surface overflow-x-hidden">
        <AppContent />
      </div>
    </Router>
  );
}
