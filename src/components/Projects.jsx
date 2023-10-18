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
        <div className="p-5">
            <h1 className="uppercase text-3xl font-bold my-2 mb-5">Projets</h1>
            <div className="flex flex-wrap">
                {projects.map((project, key) => (
                    <div key={key} className="mb-5 flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                />
                            </svg>
                            <h1 className="text-2xl font-bold">{project.name}</h1>
                        </div>
                        <p>{project.description}</p>
                        <div className="flex gap-4 font-light">
                            <p>{project.language}</p>
                            <p>{project.size} MB</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}
