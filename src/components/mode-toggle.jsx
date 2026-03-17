import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "@/components/theme-provider"
import useSound from 'use-sound'

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"

  const [playLight] = useSound('/sounds/switch-on.wav', { volume: 0.5 })
  const [playDark] = useSound('/sounds/switch-on.wav', { volume: 0.5 })

  return (
    <div className="flex items-center gap-1 bg-background rounded-full p-1 border">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => { playLight(); setTheme("light"); }}
        className={`transition-all rounded-full ${!isDark ? "bg-accent" : ""}`}
        aria-label="Switch to light mode"
      >
        <Sun className={`h-5 w-5 ${!isDark ? "text-yellow-500" : "text-muted-foreground"}`} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => { playDark(); setTheme("dark"); }}
        className={`transition-all rounded-full ${isDark ? "bg-accent" : ""}`}
        aria-label="Switch to dark mode"
      >
        <Moon className={`h-5 w-5 ${isDark ? "text-slate-300" : "text-muted-foreground"}`} />
      </Button>
    </div>
  )
}
