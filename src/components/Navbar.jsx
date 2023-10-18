import {useState} from "react";

export const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
    const handleLink = () => {
        setMenu(false)
    }
    return (
        <>
            <div className="flex justify-end f">
                <button
                    className="bg-[#262626] p-3 rounded m-2 habmenu fixed top-0 right-0 focus:outline-none focus:bg-gray-700"
                    onClick={handleMenu}
                >
                    <div className="space-y-2">
                        <div className="w-6 h-0.5 bg-gray-200"></div>
                        <div className="w-6 h-0.5 bg-gray-200"></div>
                        <div className="w-6 h-0.5 bg-gray-200"></div>
                    </div>
                </button>
            </div>
            <div
                className={`bg-[#262626] navMenu fixed top-0 left-0 w-64 h-screen py-6 px-4 shadow-lg transform transition-transform ${
                    menu ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <ul className="uppercase flex flex-col gap-10 text-xl font-bold">
                    <li >
                        <a href="#" className="transition-all hover:text-blue-500 hover:underline focus:outline-none focus:text-blue-500 focus:underline" onClick={handleLink}>Accueil</a>
                    </li>
                    <li>
                        <a href="#about" className="transition-all hover:text-blue-500 hover:underline focus:outline-none focus:text-blue-500 focus:underline" onClick={handleLink}>À propos</a>
                    </li>
                    <li>
                        <a href="#" className="transition-all hover:text-blue-500 hover:underline focus:outline-none focus:text-blue-500 focus:underline" onClick={handleLink}>Projets</a>
                    </li>
                    <li>
                        <a href="#" className="transition-all hover:text-blue-500 hover:underline focus:outline-none focus:text-blue-500 focus:underline" onClick={handleLink}>Contact</a>
                    </li>
                </ul>
            </div>
        </>


    )
}