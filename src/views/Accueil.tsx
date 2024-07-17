import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function AccueilView() {
  return (
    <Card id="accueil" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#2fa4e7",
            marginBottom: 2,
          }}
        >
          Maison de vacances à louer en Espagne
        </Typography>
        <Typography>
          Les quelques 40 millions de touristes qui s'y rendent chaque année
          vous diront cela et vous diront que l'Espagne, qui est le premier pays
          touristique d'Europe, c'est aussi un soleil radieux, un ciel toujours
          pur, un accueil aimable, un dépaysement inégalable.
        </Typography>
        <Typography>
          L'Espagne a su protéger ses trésors et son charme typique tout en
          s'équipant pour fournir aux touristes un confort et des distractions
          de tous ordres. L'afflux permanent de touristes du monde entier qui
          viennent vivre au grand air, se bronzer à loisir sur les plages
          dorées, reste la preuve formelle d'une réussite touristique sans
          pareil.
        </Typography>
        <Typography>Les raisons essentielles de ce choix :</Typography>
        <List>
          <ListItem>
            <ListItemText primary="- Une distance raisonnable des grandes villes européennes et d'accès facile." />
          </ListItem>
          <ListItem>
            <ListItemText primary="- Un climat ensoleillé ( plus de 300 jours d'ensoleillement par an )." />
          </ListItem>
          <ListItem>
            <ListItemText primary="- Des larges plages de sable doré s'enfonçant très progressivement dans une mer d'une température privilégiée." />
          </ListItem>
          <ListItem>
            <ListItemText primary="- Un arrière pays montagneux fait de richesses artistiques et naturelles." />
          </ListItem>
          <ListItem>
            <ListItemText primary="- Une région gastronomique de réputation mondiale." />
          </ListItem>
        </List>
        <Typography>
          Vous trouverez une multitude de distractions et une source
          intarissable de découvertes.
        </Typography>
        <Typography>
          Le folklore très riche de ce pays aux traditions hautes en couleurs ne
          pourrait être exposé ici complètement.
        </Typography>
        <Typography>
          Pour amorcer une approche intéressante de l'Espagne, nous vous
          conseillons de vous procurer un guide s'intitulant :{" "}
          <a
            target="_blank"
            href="http://www.amazon.fr/Lespagnol-dans-votre-poche-Collectif/dp/2035862191"
          >
            "L'Espagne dans votre poche"
          </a>{" "}
          aux Editions Hatier.
        </Typography>
      </CardContent>
    </Card>
  );
}
