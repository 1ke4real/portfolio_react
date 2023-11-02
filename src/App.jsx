import {Home} from "./screen/Home.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {About} from "./components/About.jsx";
import {Projects} from "./components/Projects.jsx";
import {Skills} from "./components/Skills.jsx";
import {Contact} from "./components/Contact.jsx";


function App() {

  return (
    <>
        <div className="container">
            {Array.from({ length: 100 }, (_, index) => (
                <div key={index} className="circle-container">
                    <div className="circle"></div>
                </div>
            ))}
        </div>
        <Navbar/>
        <Home/>
        {/*<About/>*/}
        <Projects/>
        <Skills/>
        <Contact/>
    </>
  )
}

export default App
