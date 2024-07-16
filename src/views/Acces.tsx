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
          Accéder
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
          Par avion
        </Typography>
        <Typography>
          Barcelone aéroport international accueille journellement des vols en
          provenance de toutes les villes d'europe. (Location possible de
          voiture)
        </Typography>
        <Typography>
          Ryanair dessert Reus (Taragone) à 75Km de la maison au départ de
          Charleroi (Brussels South Airport)
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
          Par train
        </Typography>
        <Typography>
          ALDEA, petite ville située à dix neuf kilomètres est desservie par les
          liaisons journalières au départ de Barcelone. Les taxis assurent la
          liaison Aldéa-Riomar.
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
          Par autocar
        </Typography>
        <Typography>
          Des lignes régulières offrent une liaison confortable et peu chère.
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
          Par voiture
        </Typography>
        <Typography>
          Accès par l’autoroute n° A7, sortie n° 39bis,(L’Ampolla).
        </Typography>
        <Typography>
          Ensuite, reprendre la nationale direction Valencia, roulez 500 m. et
          au haut d’une montée, prendre à gauche "Deltebre".
        </Typography>
        <Typography>
          Roulez pendant 10 Km (attention aux virages à angle droit) et arriver
          à « La Cava » puis ensuite continuer 8km vers Riomar (Riumar en
          catalan).
        </Typography>
      </CardContent>
    </Card>
  );
}
