import { Navbar,Welcome,Services } from "./components"

const App = () => {
  return (
    <div className="min-h-screen">
     <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Services />
     </div>
     <div>
        
     </div>
    </div>
  )
}

export default App
