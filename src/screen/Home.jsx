import {getProject} from "../lib/getProject.js";


const project = async ()=>{
    const data = await getProject()
    console.log(data)
    return data
}
export const Home = () => {
    project()
    return (
        <div>
            <h1>Home</h1>

        </div>
    )
}