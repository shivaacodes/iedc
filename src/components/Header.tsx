import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">IEDC</span>
            <span className="text-xl font-light underline underline-offset-2">CUSAT</span>
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="font-serif text-5xl font-bold mb-2">IEDC CUSAT</h1>
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            Innovation Development and Entrepreneurship Development Cell
          </p>
        </div>
        
        <nav className="border-t border-border pt-4">
          <ul className="flex justify-center gap-12 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-accent transition-colors">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent transition-colors">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-accent transition-colors">
                EVENTS
              </Link>
            </li>
            <li>
              <Link to="/incubation" className="hover:text-accent transition-colors">
                INCUBATION
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-accent transition-colors">
                TEAM
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent transition-colors">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
