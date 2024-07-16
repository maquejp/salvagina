import { Typography } from "@mui/material";

export default function MeteoFranceComponent() {
  return (
    <>
      <Typography variant="h6">Météo</Typography>
      <iframe
        id="widget_autocomplete_preview"
        style={{ border: 0, margin: 10 }}
        src="https://meteofrance.com/widget/prevision/620250##2196F3BF"
        title="Prévisions Ambleteuse par Météo-France"
      ></iframe>
    </>
  );
}
