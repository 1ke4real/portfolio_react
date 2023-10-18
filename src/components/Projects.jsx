import {useEffect, useState} from "react";
import {getProject} from "../lib/getProject.js";

export const Projects = () => {
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
        <div className="flex flex-wrap gap-5 justify-center">
            {projects.map((project) => (<div key={project.title} className=" flex-1 card mx-5 my-10 p-10 text-center rounded">
                <h1 className="font-bold text-2xl uppercase">{project.title}</h1>
                <img src={project.image} alt="" className="w-full h-60 object-cover rounded my-2"/>
                <a href={project.link} className="button">Voir le projet</a>
                <a href={project.github} className="button">Voir le code</a>
            </div>))}

        </div>
    )
}