import fs from 'vite-plugin-fs/browser';

export const getProject = async () => {
    const projects = []
    const files = await fs.readdir("./src/projects")
    for (const file of files) {
        const fileContent = await fetch(`./src/projects/${file}`)
        const fileContentJson = await fileContent.json()
        projects.push(fileContentJson)
    }
    return projects
}