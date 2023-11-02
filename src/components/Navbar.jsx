import {useState} from "react";
import logo from "../assets/images/logo.png"
import {motion} from "framer-motion";
import {AnimatedLogoNav} from "./AnimatedLogoNav.jsx";
export const Navbar = () => {
    
    let Links = [
        {name: "0 . ACCEUIL", link: "#home"},
        // {name: "A PROPOS", link: "#about"},
        {name: "1 . PROJECTS", link: "#projects"},
        {name: "2 . SKILLS", link: "#skills"},
        {name: "3 . CONTACT", link: "#contact"},
    ];
    let [open, setOpen] = useState(false);

    return (

        <div className='w-full fixed top-0 left-0 z-50 nav bg-background'>
            <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <AnimatedLogoNav logo={logo}/>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {

                        open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                   stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                    }
                </div>

                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-background md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link , key) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold' key={key}>
                                <a href={link.link}
                                   className=' hover:text-important duration-500'>{link.name}</a>
                            </li>))
                    }
                </ul>
                {/* button */}
            </div>
        </div>
    );

}