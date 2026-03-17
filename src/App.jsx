import { BackgroundLines } from "@/components/ui/background-lines"
import ModeToggle from "@/components/mode-toggle"
import WaitingPage from "@/pages/waiting-page"

function App() {
  return (
    <BackgroundLines>
      <main className="relative min-h-screen">
        <WaitingPage />
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <ModeToggle />
        </div>
      </main>
    </BackgroundLines>
  )
}

export default App
