import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isHome = location === '/';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const navDark = true;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0c1222]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex flex-col">
              <div className="flex items-center gap-2">
                <img
                  src="/adilabs-logo.jpeg"
                  alt="ADILABS"
                  className="h-9 w-auto object-contain"
                />
                <span className={`text-xl font-bold ${navDark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  ADILABS <span className="font-normal text-sky-400">AI</span>
                </span>
              </div>
              {isHome && (
                <span className="text-[10px] font-medium tracking-widest text-gray-400 mt-0.5 uppercase">
                  Data. Innovation. Quality. Secure.
                </span>
              )}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-3 text-sm font-medium transition-all duration-200 flex items-center gap-0.5 ${
                  navDark
                    ? location === item.path
                      ? 'text-cyan-300'
                      : 'text-gray-300 hover:text-white'
                    : location === item.path
                      ? 'text-sky-600 dark:text-cyan-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-cyan-400'
                }`}
              >
                {item.name}
                {!['Home', 'Contact'].includes(item.name) && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                {location === item.path && (
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                    navDark ? 'bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]' : 'bg-sky-500 dark:bg-cyan-400'
                  }`} />
                )}
              </Link>
            ))}
            {!navDark && (
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-white/10 ml-2"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            )}
            <Link href="/contact">
              <button
                className={`ml-4 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  navDark
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:from-sky-400 hover:to-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:from-sky-400 hover:to-cyan-400 shadow-lg'
                }`}
              >
                AI Readiness
              </button>
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-2">
            {!navDark && (
              <button onClick={toggleTheme} className="p-2 rounded-lg text-gray-600 dark:text-gray-400">
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-lg ${navDark ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden border-t ${navDark ? 'bg-[#0c1222] border-white/10' : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg ${
                  navDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                } ${location === item.path ? (navDark ? 'text-cyan-400' : 'text-sky-600 dark:text-cyan-400') : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}