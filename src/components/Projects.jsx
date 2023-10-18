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
            {projects.map((project) => (<div key={project.title} className=" flex-1 card m-10 p-10 text-center">
                <h1>{project.title}</h1>
            </div>))}

        </div>
    )
}