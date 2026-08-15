import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "@/components/use-theme"
import useSound from 'use-sound'

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  const [playLight] = useSound('/sounds/switch-on.wav', { volume: 0.5 })
  const [playDark] = useSound('/sounds/switch-on.wav', { volume: 0.5 })

  const toggleTheme = (event, newTheme) => {
    // If no change needed or API not supported, just exit/set
    if (newTheme === theme) return;

    if (!document.startViewTransition) {
      newTheme === "light" ? playLight() : playDark();
      setTheme(newTheme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      newTheme === "light" ? playLight() : playDark();
      setTheme(newTheme);
    });

    transition.ready.then(() => {
      // We ALWAYS animate the 'new' view (the one on top) 
      // growing from 0 to full size
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          // 'new' is the state we just switched to
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <div className="flex items-center gap-1 bg-background rounded-full p-1 border relative z-[100]">
      <Button
        variant="ghost"
        size="icon"
        onClick={(e) => toggleTheme(e, "light")}
        className={`transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full ${!isDark ? "bg-accent scale-105" : ""}`}
      >
        <Sun className={`h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${!isDark ? "text-yellow-500 scale-110" : "text-muted-foreground scale-100"}`} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={(e) => toggleTheme(e, "dark")}
        className={`transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full ${isDark ? "bg-accent scale-105" : ""}`}
      >
        <Moon className={`h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? "text-slate-300 scale-110" : "text-muted-foreground scale-100"}`} />
      </Button>
    </div>
  )
}
