import { Card, CardContent, Typography } from "@mui/material";
import AccederComponent from "../components/acceder/Acceder";

export default function AccederView() {
  return (
    <Card id="acceder" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Acceder
        </Typography>
        <AccederComponent />
      </CardContent>
    </Card>
  );
}
