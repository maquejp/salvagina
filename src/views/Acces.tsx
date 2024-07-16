import { Card, CardContent, Typography } from "@mui/material";

export default function AccesView() {
  return (
    <Card id="acces" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#2fa4e7",
            marginBottom: 2,
          }}
        >
          Accès
        </Typography>
      </CardContent>
    </Card>
  );
}
