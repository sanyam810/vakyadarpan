import { Navbar,Welcome,Services } from "./components"
import Hero from "./components/Hero"

const App = () => {
  return (
    <div className="min-h-screen">
     <div className="gradient-bg-welcome">
      <div className="flex flex-col gap-28">
        <Navbar />
        <Hero />
        
      </div>
      <Services />
     </div>
     <div>
        
     </div>
    </div>
  )
}

export default App
