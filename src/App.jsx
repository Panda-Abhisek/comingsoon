import { BackgroundLines } from "@/components/ui/background-lines"
import ModeToggle from "@/components/mode-toggle"
import Home from "./pages/Home"

function App() {
  return (
    <BackgroundLines>
      <main className="relative min-h-screen">
        <Home />
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <ModeToggle />
        </div>
      </main>
    </BackgroundLines>
  )
}

export default App
