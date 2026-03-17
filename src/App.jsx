import { BackgroundLines } from "@/components/ui/background-lines"
import { HomePage } from "@/components/home-page"
import ModeToggle from "@/components/mode-toggle"

function App() {
  return (
    <BackgroundLines>
      <main className="relative min-h-screen">
        <HomePage />
        <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50">
          <ModeToggle />
        </div>
      </main>
    </BackgroundLines>
  )
}

export default App
