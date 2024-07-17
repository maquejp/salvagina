import { Card, CardContent, Typography } from "@mui/material";
import MapComponent from "../components/Map";

export default function RiomarView() {
  return (
    <Card id="riomar" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#2fa4e7",
            marginBottom: 2,
          }}
        >
          Riomar
        </Typography>
        <Typography>
          Riomar bénéficie d'une situation exceptionnelle dans le delta de
          l'Ebre (le plus grand fleuve d'Espagne, 980 Km), lui-même situé au sud
          de la Costa Dorada.
        </Typography>
        <Typography>
          La Costa Dorada est unique en Europe. Située au centre de la
          Catalogne, elle est le départ de nombreuses et captivantes excursions
          ; au-delà des possibilités de ses plages, l'arrière-pays très riche en
          folklore nous donne le piment d'un dépaysement agréable.
        </Typography>
        <Typography>
          La Costa Dorada reste facile d'accès. Les distances indiquées sont
          celle entre la ville citée et Riomar par la route.
        </Typography>
        <Typography>
          Liège : 1450 KM, Luxembourg : 1280 Km, Lyon : 750 Km, Barcelone : 170
          Km
        </Typography>
        <img
          src="images/carte_zone.jpg"
          alt="carte-zone-riomar"
          style={{
            display: "block",
            margin: "auto",
            maxWidth: "100%",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        />
        <MapComponent />
        <Typography>
          Le climat est particulièrement remarquable ; plus précisément la
          région de Riomar bénéficie d'un microclimat.
        </Typography>
        <Typography>
          Déjà les romains venaient s'y faire soigner. Notamment un couloir
          montagneux permet à une brise très agréable de rejeter vers le large
          les micro-organismes contenus dans l'air. Cette brise est aussi la
          bienvenue pour son effet rafraîchissant.
        </Typography>
        <Typography>
          Ce microclimat est reconnu par le corps médical et est
          particulièrement recommandé pour les personnes qui souffrent notamment
          de douleurs articulaires, rhumatismes, arthrite, de maladies
          respiratoires (bronchites, asthme...) ou encore de maladies de peau
          telles que le psoriasis.
        </Typography>
        <Typography>
          Plus de chose à faire visitez le site{" "}
          <a
            target="_blank"
            href="http://www.turismedeltebre.com/8/guide-de-services-touristiques.html"
          >
            {" "}
            Turisme Deltebre
          </a>
          .
        </Typography>
      </CardContent>
    </Card>
  );
}
