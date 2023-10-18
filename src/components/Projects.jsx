import {useEffect, useState} from "react";

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const fetchProjects = async () => {
        const req = await fetch("https://api.github.com/users/1ke4real/repos");
        const data = await req.json();
        // Filter the projects you want
        const filteredProjects = data.filter(
            (project) =>


                project.name === "javascript_locale_storage_api" ||
                project.name === "fake-store-react" ||
                project.name === "movie-app" ||
                project.name === "react-flix"
        );
        setProjects(filteredProjects);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    console.log(projects);
    return (
        <div className="p-3">
            <h1 className="uppercase text-3xl font-bold my-2 mb-5">Projets</h1>
            <div className="flex flex-wrap gap-4">
                {projects.map((project, key) => (
                    <div key={key} className="mb-5 flex flex-col gap-4 bg-[#1A1A1A] p-3">
                        <h1 className="text-2xl font-bold">{project.name}</h1>
                        <p className="leading-relaxed">{project.description}</p>
                        <div className="flex gap-4 font-light ">
                            <p>{project.language}</p>
                            <p>{project.size} MB</p>
                        </div>
                    </div>
                ))}
                <button className="button py-3  w-full text-2xl rounded-lg font-bold">
                    <a href="https://github.com/1ke4real">Voir plus</a>
                </button>

            </div>
        </div>
    );

}
