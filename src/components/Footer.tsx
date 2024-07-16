import { Facebook } from "@mui/icons-material";
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
              Atlantis
              <br />
            </Typography>
            <Typography sx={{ fontWeight: "bold", textAlign: "left", pl: 2 }}>
              Maison à la côte d'Opale
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ textAlign: "right", pr: 2 }}>
              <Facebook
                onClick={() =>
                  window.open("https://www.facebook.com/atlantis.ambleteuse")
                }
              />
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
