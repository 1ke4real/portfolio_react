import {useState} from "react";
import {Bars3BottomRightIcon, BookOpenIcon, XMarkIcon} from "@heroicons/react/20/solid/index.js";

export const Navbar = () => {
    let Links = [
        {name: "ACCEUIL", link: "#home"},
        {name: "A PROPOS", link: "#about"},
        {name: "PROJETS", link: "/"},
        {name: "CONTACT", link: "/"},
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-[#262626] py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <BookOpenIcon className='w-7 h-7 text-blue-600'/>
                    <span>Mike LEMAN</span>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon/> : <Bars3BottomRightIcon/>
                    }
                </div>
                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#262626] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <a href={link.link}
                                   className=' hover:text-blue-400 duration-500'>{link.name}</a>
                            </li>))
                    }
                </ul>
                {/* button */}
            </div>
        </div>
    );

}