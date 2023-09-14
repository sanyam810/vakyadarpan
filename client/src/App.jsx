import { Navbar,Welcome,Services } from "./components"

const App = () => {
  return (
    <div className="min-h-screen">
     <div className="gradient-bg-welcome">
      <div className="flex flex-col gap-28">
        <Navbar />
        <Welcome />
        
      </div>
      <Services />
     </div>
     <div>
        
     </div>
    </div>
  )
}

export default App
