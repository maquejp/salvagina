import { Box, Grid, Typography } from "@mui/material";

export default function FooterComponent() {
  return (
    <footer>
      <Box
        sx={{
          background: "#2fa4e7",
          fontSize: "small",
          textAlign: "center",
          color: "white",
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontWeight: "bold", textAlign: "left", pl: 2 }}>
              Salvagina
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="caption" sx={{ my: 2 }}>
          Copyright 2024
        </Typography>
      </Box>
    </footer>
  );
}
