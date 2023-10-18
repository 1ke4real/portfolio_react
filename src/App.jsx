import {Home} from "./screen/Home.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {About} from "./components/About.jsx";
import {Projects} from "./components/Projects.jsx";
import {Skills} from "./components/Skills.jsx";
import {Contact} from "./components/Contact.jsx";


function App() {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
    </>
  )
}

export default App
