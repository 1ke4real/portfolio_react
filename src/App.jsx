import {Home} from "./screen/Home.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {About} from "./components/About.jsx";
import {Projects} from "./components/Projects.jsx";

function App() {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
    </>
  )
}

export default App
