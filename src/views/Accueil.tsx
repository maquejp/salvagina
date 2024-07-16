import { Card, CardContent, Divider, Typography } from "@mui/material";
import ImageCarouselComponent from "../components/accueil/Carousel";
import carouselData from "../datas/carousel";

export default function AccueilView() {
  return (
    <Card id="accueil" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <ImageCarouselComponent images={carouselData} />
        <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#2fa4e7",
            marginBottom: 2,
          }}
        >
          Maison de vacances à la mer
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Notre maison se situe à Ambleteuse (France), village de pêcheurs situé
          dans la région des deux caps (Gris nez et Blanc nez), entre Calais et
          Boulogne-sur-Mer à proximité de Wissant et de Wimereux.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Mitoyenne, elle est d'une surface habitable de 138m2 sur 4 niveaux
          avec vue sur la mer.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Elle est composée au Rez-de-chaussée d'une salle de douche avec
          toilette, d'un garage (avec deux vélos pour adulte), d'une cour
          extérieure avec cuisine d'été disposant de meubles de jardin et d'un
          BBQ. Vous y trouverez aussi le lave linge.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Au premier étage, vous trouverez la cuisine équipée (frigo avec
          congélateur, lave-vaiselle, four, four à micro-onde, cafetière,
          bouilloire électrique...) ainsi qu'un living et un coin salon avec
          télévision (Accès à Free-TV via l'adsl). Au niveau du salon, il y a un
          aussi un feu ouvert.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Au deuxième étage, deux chambres (une avec deux lits d'une personne et
          la seconde avec un lit de deux personnes), une grande salle de bain
          (douche et baignoire) et une seconde toilette.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Au dernier étage, trois chambres: une chambre avec un lit de deux
          personnes et les deux autres avec deux lits d'une personne.
        </Typography>
        <Typography>
          Vous pouvez consulter la disponibilité, comment y accéder et les
          tarifs sur notre site.
        </Typography>
      </CardContent>
    </Card>
  );
}
