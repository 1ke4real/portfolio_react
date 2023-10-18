import {useState} from "react";

export const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <>
            <div className="flex justify-end">
                <button className="bg-[#262626] p-3 rounded m-2 z-999" onClick={handleMenu}>
                    <div className="space-y-2">
                        <div className="w-6 h-0.5 bg-gray-200"></div>
                        <div className="w-6 h-0.5 bg-gray-200"></div>
                        <div className="w-6 h-0.5 bg-gray-200"></div>
                    </div>
                </button>
            </div>
            {menu && <div className="bg-[#262626] fixed w-[100%] px-2 h-screen navMenu">
                <ul className="uppercase flex flex-col gap-32 p-10 text-xl">
                    <li>acceuil </li>
                    <li>a propos</li>
                    <li>projets</li>
                    <li>contact</li>
                </ul>
            </div>}
        </>
    )
}