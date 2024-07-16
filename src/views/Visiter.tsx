import { Card, CardContent, Typography, Grid } from "@mui/material";
import MeteoFranceComponent from "../components/visiter/MeteoFrance";
import VisiterInformationComponent from "../components/visiter/VisiterInformation";
import VisiterCoinsComponent from "../components/visiter/VisiterCoins";
import VisiterMangerComponent from "../components/visiter/VisiterManger";

export default function VisiterView() {
  return (
    <Card id="visiter" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Visiter
        </Typography>

        <Grid container spacing={2} sx={{ marginTop: 2, marginLeft: 2 }}>
          <Grid xs={3}>
            <MeteoFranceComponent />
          </Grid>
          <Grid xs={9}>
            <VisiterInformationComponent />
            <VisiterCoinsComponent />
            <VisiterMangerComponent />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
