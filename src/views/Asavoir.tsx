import { Card, CardContent, Grid } from "@mui/material";

export default function AsavoirView() {
  return (
    <Card id="asavoir" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6} sm={3} md={2}>
            <img
              src="/images/nopets.png"
              alt="No Pets"
              title="No Pets"
              style={{ width: "100%", maxWidth: "100px", margin: "auto" }}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <img
              src="/images/no-smoking.png"
              alt="No Smoking"
              title="No Smoking"
              style={{ width: "100%", maxWidth: "100px", margin: "auto" }}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <img
              src="/images/10-beds.png"
              alt="10 Beds"
              title="10 Beds"
              style={{ width: "100%", maxWidth: "100px", margin: "auto" }}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <img
              src="/images/wifi.png"
              alt="WiFi"
              title="WiFi"
              style={{ width: "100%", maxWidth: "100px", margin: "auto" }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
