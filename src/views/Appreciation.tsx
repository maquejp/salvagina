import { Card, CardContent, Typography } from "@mui/material";
import AppreciationsComponent from "../components/appreciations/Appreciations";

export default function ApprecisationsView() {
  return (
    <Card id="appreciations" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Appreciations
        </Typography>
        <AppreciationsComponent />
      </CardContent>
    </Card>
  );
}
