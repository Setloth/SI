
// import { useState } from "react";

import { useLoaderData } from "react-router";

export async function loader({ params }) {
    const project = await (await fetch("https://special-halibut-9j66xpj7rj6f7x4r-8080.app.github.dev/projects/"+params.id)).json() // dummy data - replace with api fetch
    return { project }
}

const Project = () => {
    const { project } = useLoaderData();
    
    return (
        <>
            {project.name} {/* data projection */}
        </>
    )
}

export default Project;