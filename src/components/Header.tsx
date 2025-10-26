import { BookOpen } from "lucide-react";
import { Github } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center space-x-3 justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-secondary rounded-lg">
              <BookOpen className="h-6 w-6 text-subtle-green" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SRM Seat FinderX</h1>
              <p className="text-sm text-muted-foreground">Semester Exam Seating Arrangement</p>
            </div>
          </div>
          <a
            href="https://github.com/HexHawk/SRM-Seat-FinderX"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none focus-visible:ring-2 focus-visible:ring-subtle-green rounded transition-colors"
            tabIndex={0}
          >
            <Github className="h-6 w-6 text-muted-foreground hover:text-subtle-green focus-visible:text-subtle-green transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
