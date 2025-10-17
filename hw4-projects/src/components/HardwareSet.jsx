import { Stack, Typography } from "@mui/material";

export default function HardwareSet({ id, used, capacity }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="body2" sx={{ minWidth: 70 }}>{id}:</Typography>
      <Typography variant="body2">{used}/{capacity}</Typography>
    </Stack>
  );
}
