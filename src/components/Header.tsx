import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["nucleo", "psique", "forma", "linguagem", "governanca", "arquivo"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "nucleo", label: "Núcleo" },
    { id: "psique", label: "Psique" },
    { id: "forma", label: "Forma" },
    { id: "linguagem", label: "Linguagem" },
    { id: "governanca", label: "Governança" },
    { id: "arquivo", label: "Arquivo" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1440px] mx-auto px-20 py-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("nucleo")}
          className="flex items-center gap-3 hover:opacity-70 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center">
            <span className="text-[10px]">◯</span>
          </div>
          <span className="tracking-wide">SOS v2.0</span>
        </button>

        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm transition-colors hover:text-foreground ${
                activeSection === item.id ? "text-foreground" : "text-muted"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
}
