import { Typography, Grid } from "@mui/material";

export default function VisiterMangerComponent() {
  return (
    <>
      <Typography variant="h6">A la recherche d'un bon repas</Typography>
      <Grid container spacing={2} sx={{ marginTop: 2, marginLeft: 2 }}>
        <Grid xs={6}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Le Bistro
          </Typography>
          <Typography>Mélanie Lefebvre</Typography>
          <Typography>869 Route du cap</Typography>
          <Typography>62179 Cpa-Griz-Nez (Audinghem)</Typography>
          <Typography>+33 (0) 3 21 32 96 79</Typography>
          <Typography>
            <a target="_blank" href="https://lebistro.me">
              https://lebistro.me
            </a>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
