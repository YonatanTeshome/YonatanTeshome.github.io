import { useState } from "react";
import {
  Card, CardContent, CardActions, Button,
  Typography, Stack, TextField, Chip
} from "@mui/material";
import HardwareSet from "./HardwareSet";

export default function ProjectCard({
  projectId, name, authorizedUsers, hardwareSets, joined, onToggleJoin
}) {
  const [qty, setQty] = useState("");

  return (
    <Card sx={{ borderLeft: joined ? "6px solid #c8e6c9" : "6px solid transparent",
    backgroundColor: joined ? "#f3fff3" : "white"}}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{name}</Typography>

        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 1 }}>
          {authorizedUsers.map(u => <Chip key={u} label={u} size="small" />)}
        </Stack>

        <Stack spacing={1} sx={{ mb: 1 }}>
          {hardwareSets.map(hs => (
            <HardwareSet key={hs.id} id={hs.id} used={hs.used} capacity={hs.capacity} />
          ))}
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <TextField size="small" label="Enter qty" value={qty} onChange={e=>setQty(e.target.value)} sx={{ width: 140 }}/>
          <Button variant="outlined">Check In</Button>
          <Button variant="outlined">Check Out</Button>
        </Stack>
      </CardContent>

      <CardActions>
        <Button
          variant={joined ? "contained" : "outlined"}
          color={joined ? "success" : "primary"}
          onClick={() => onToggleJoin(projectId)}
        >
          {joined ? "Leave" : "Join"}
        </Button>
      </CardActions>
    </Card>
  );
}
