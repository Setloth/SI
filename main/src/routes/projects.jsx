
// import { useState } from "react";
import { Button, Card, CardActions, CardContent, Unstable_Grid2 as Grid, Typography } from '@mui/material/'; // Grid version 2


import { useLoaderData } from "react-router";

export async function loader() {
    const projects = await (await fetch("https://special-halibut-9j66xpj7rj6f7x4r-8080.app.github.dev/projects/")).json() // dummy data - replace with api fetch
    return { projects }
}

const Projects = () => {
    const { projects } = useLoaderData();

    return (
        <div>
            {/* {projects.length} data projection */}
            <Grid container spacing={2}>
                {projects.map(p => (
                    <Grid md={3}>
                        <Card>
                            <CardContent>
                          
                                <Typography variant="h5" component="div">
                                {p.name} | {p.length}
                                    
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {p.type}
                                </Typography>
                                <Typography variant="body2">
                                 {p.description || "no data"}
                                </Typography>
                                <Typography sx={{ pt:2, fontSize:14 }} color="text.secondary" gutterBottom>
                                    {p.contributors.join(", ")}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Open</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Projects;