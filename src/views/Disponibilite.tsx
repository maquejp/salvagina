import { Card, CardContent, Typography } from "@mui/material";

export default function DisponibilitesView() {
  return (
    <Card id="disponibilites" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Disponibilités
        </Typography>
        <iframe
          name="planning"
          src="https://www.pour-les-vacances.com/site/planning-iframe.php?id=15762"
          width="100%"
          height="450"
          style={{ border: 0 }}
        ></iframe>
        <a
          href="http://www.abritel.fr/location-vacances/p1361619"
          target="_ABRITEL"
          rel="nofollow"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "-30px",
            fontSize: "12px",
          }}
        >
          Abritel.fr #1361619
        </a>
      </CardContent>
    </Card>
  );
}
