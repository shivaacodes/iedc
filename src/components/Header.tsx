import { Link } from "react-router-dom";
import Clock from "./Clock";

const Header = () => {
  return (
    <header className="w-full bg-background py-4">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/IEDC Logo.svg" alt="IEDC Logo" className="h-12" />
          </Link>
          <Clock />
        </div>
        
        <div className="text-center mb-4">
          <h1 className="font-serif text-5xl font-bold mb-2">IEDC CUSAT</h1>
          <p className="text-base tracking-widest text-muted-foreground uppercase">
            Innovation Development and Entrepreneurship Development Cell
          </p>
        </div>
        
        <nav className="border-t border-border pt-4">
          <ul className="flex justify-center gap-12 text-base font-medium">
            <li>
              <a href="#home" className="hover:text-sky-500 transition-colors duration-300">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-sky-500 transition-colors duration-300">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-sky-500 transition-colors duration-300">
                EVENTS
              </a>
            </li>
            <li>
              <a href="#incubation" className="hover:text-sky-500 transition-colors duration-300">
                INCUBATION
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-sky-500 transition-colors duration-300">
                TEAM
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-sky-500 transition-colors duration-300">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-8 border-b border-border my-4"></div>
    </header>
  );
};

export default Header;
