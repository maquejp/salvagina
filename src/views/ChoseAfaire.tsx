import { Card, CardContent, Typography } from "@mui/material";

export default function ChoseAfaireView() {
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
          A voir et faire
        </Typography>
        <Typography>
          Outre les plaisirs de la mer, Riomar possède de nombreux équipements
          pour votre séjour : piscine, bars, restaurants, terrains de tennis,
          discothèque (Deltebre), terrains de pétanque, pêche en mer et en
          rivière, promenades en bateaux...
        </Typography>
        <Typography>
          Riomar est situé dans une zone protégée, à proximité d'une grande
          réserve naturelle très connue des ornithologues ;
        </Typography>
        <Typography>
          L'arrière pays vous fera découvrir de vieux villages perdus dans les
          rizières. Puis en traversant de vastes plantations d'orangers et
          d'oliviers, vous arriverez au pied de la montagne (1400m) site de
          jolies promenades.
        </Typography>
        <Typography>
          Pendant 10 Jours au mois d'août, au village de La Cava, vous pouvez
          assister à une grande fête typique Catalane : Jeux, folklore,
          vachettes dans les rues...
        </Typography>
      </CardContent>
    </Card>
  );
}
