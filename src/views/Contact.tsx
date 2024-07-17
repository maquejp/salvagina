import { Card, CardContent, Typography } from "@mui/material";

export default function ContactView() {
  return (
    <Card id="contact" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#2fa4e7",
            marginBottom: 2,
          }}
        >
          Contact
        </Typography>
        <Typography>François Huart</Typography>
        <Typography>11, rue saules Bastin</Typography>
        <Typography>4920 Remouchamps</Typography>
        <Typography>Belgique</Typography>
        <Typography>Tel: +32 (0) 4 384 58 22</Typography>
        <Typography>Email: francois.huart@gmail.com</Typography>
      </CardContent>
    </Card>
  );
}
