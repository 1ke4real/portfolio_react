import {getProject} from "../lib/getProject.js";
import {useEffect, useState} from "react";
import profile from "../assets/images/profil.jpg"


export const Home = () => {
    const [projects, setProjects] = useState([])
    const project = async () => {
        const data = await getProject()
        setProjects(data)
        console.log(data)

    }
    useEffect(() => {
        project()
    }, []);
    return (
        <>
            <div className="flex flex-col place-content-center items-center h-screen gap-10 ">
                <div className="flex gap-5 rounded-lg items-center justify-center">
                    <div><img src={profile} alt="profil" width={200} height={200}
                              className="rounded-full object-cover top mx-8"/></div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <h1 className="text-6xl font-bold z-50 top">Bonjour je m'appelle <span
                                className="text-blue-500">Mike</span></h1>
                            <p className="text-xl z-50 top font-light">Développeur react js et symfony</p>
                        </div>
                        <button className="button py-3 w-1/2 text-2xl rounded-lg font-bold">En savoir
                            plus
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
                {projects.map((project) => (<div key={project.title} className=" flex-1 card m-10 p-10 text-center">
                    <h1>{project.title}</h1>
                </div>))}

            </div>
        </>
    )
}