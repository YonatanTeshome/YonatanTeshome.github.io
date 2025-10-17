import { useState } from "react";
import { Container, Typography, Stack } from "@mui/material";
import ProjectCard from "./components/ProjectCard";

const initialProjects = [
  { id: 1, name: "Project Name 1", authorizedUsers: ["alice","bob","charlie"],
    joined: false, hardwareSets: [{ id: "HWSet1", used: 50, capacity: 100 },
                                  { id: "HWSet2", used: 0,  capacity: 100 }] },
  { id: 2, name: "Project Name 2", authorizedUsers: ["dave","erin"],
    joined: true,  hardwareSets: [{ id: "HWSet1", used: 50, capacity: 100 },
                                  { id: "HWSet2", used: 0,  capacity: 100 }] },
  { id: 3, name: "Project Name 3", authorizedUsers: ["frank"],
    joined: false, hardwareSets: [{ id: "HWSet1", used: 0,  capacity: 100 },
                                  { id: "HWSet2", used: 0,  capacity: 100 }] },
];

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const toggleJoin = (projectId) =>
    setProjects(ps => ps.map(p => p.id === projectId ? { ...p, joined: !p.joined } : p));

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Projects</Typography>
      <Stack spacing={2}>
        {projects.map(p => (
          <ProjectCard
            key={p.id}
            projectId={p.id}
            name={p.name}
            authorizedUsers={p.authorizedUsers}
            hardwareSets={p.hardwareSets}
            joined={p.joined}
            onToggleJoin={toggleJoin}
          />
        ))}
      </Stack>
    </Container>
  );
}
