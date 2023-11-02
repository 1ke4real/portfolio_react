import {useEffect, useState} from "react";

export const Projects = () => {
    const handleGithub = () => {
        window.location.href = "https://github.com/1ke4real";
    }
    const [projects, setProjects] = useState([]);
    const fetchProjects = async () => {
        const req = await fetch("https://api.github.com/users/1ke4real/repos");
        const data = await req.json();
        // Filter the projects you want
        const filteredProjects = data.filter(
            (project) =>
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
        <div className="p-5 py-8 mb-8 lg:p-16" id="projects">
            <h1 className="uppercase text-3xl font-bold my-2 mb-20 lg:text-5xl text-title lg:text-center">Projets</h1>
            <div className="flex flex-wrap gap-4 lg:flex-nowrap lg:space-x-4 lg:justify-center">
                {projects.map((project, key) => (
                    <div key={key} className="mb-5 flex flex-col gap-4 bg-card border-2 border-border p-3 rounded-lg lg:w-1/4">
                        <h1 className="text-2xl font-bold">{project.name}</h1>
                        <p className="leading-loose text-sm">{project.description}</p>
                        <div className="flex gap-4 font-light ">
                            <p>{project.language}</p>
                            <p>{project.size} MB</p>
                        </div>
                    </div>
                ))}


            </div>
          <div className="lg:w-1/4 lg:mx-auto lg:mt-20">
              <button className="button py-3  w-full text-2xl rounded-lg font-bold" onClick={handleGithub}>
                  Voir plus
              </button>
          </div>
        </div>
    );

}
