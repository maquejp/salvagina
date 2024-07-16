import { Card, CardContent, Typography } from "@mui/material";

export default function PhotosView() {
  return (
    <Card id="photos" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#2fa4e7",
            marginBottom: 2,
          }}
        >
          Photos
        </Typography>
      </CardContent>
    </Card>
  );
}
