export const getProject = async () => {
    const projects = []
    const files = ["pokedex.json", "filmReact.json", "filmNative.json"]
    for (const file of files) {
        try {
            const fileContent = await fetch(`./src/projects/${file}`);
            const fileContentJson = await fileContent.json();
            projects.push(fileContentJson);
        } catch (error) {
            console.error(`Erreur lors de la récupération de ${file}:`, error);
        }
    }

    return projects
}