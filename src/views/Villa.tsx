import { Card, CardContent, Typography } from "@mui/material";

export default function VillaView() {
  return (
    <Card id="villa" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#2fa4e7",
            marginBottom: 2,
          }}
        >
          La villa (Montoro 57)
        </Typography>
        <Typography>
          La villa est située dans le village résidentiel de Riomar, au sud de
          la Costa Dorada, station familiale aux plages de sable fin.
        </Typography>
        <Typography>
          Elle se situe dans une urbanisation portant le nom de " SALVAGINA "
        </Typography>
        <Typography>
          La villa se trouve â 100 mètres de la plage, et a accès directement à
          une piscine particulière (25m sur 13 m) pour la résidence.
        </Typography>
        <Typography>
          Un grand barbecue, près du bar, est disponible sur demande.
        </Typography>
        <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
          Composition de la villa
        </Typography>
        <Typography>Au rez-de-chaussée</Typography>
        <Typography sx={{ marginLeft: 2 }}>
          Une chambre avec 2 lits superposés d'une personne, et un 3ème d'une
          personne.
        </Typography>
        <Typography sx={{ marginLeft: 2 }}>
          Un cabinet de toilette avec évier, douche, lave linge et WC.
        </Typography>
        <Typography>A l'entresol</Typography>
        <Typography sx={{ marginLeft: 2 }}>
          Salle de séjour avec cheminée feu de bois.
        </Typography>
        <Typography sx={{ marginLeft: 2 }}>
          Cuisine équipée, frigo-congélateur, divan convertible permettant le
          couchage de 2 personnes.
        </Typography>
        <Typography>A l'étage</Typography>
        <Typography sx={{ marginLeft: 2 }}>
          Une chambre à coucher avec un lit d'1,40m et un placard.
        </Typography>
        <Typography sx={{ marginLeft: 2 }}>
          Une salle de bain avec baignoire (douche), évier, WC.
        </Typography>
        <Typography>Ci-dessous, le plan du lotissement:</Typography>
        <img
          src="images/plan_lotissement.jpg"
          alt="villa"
          style={{
            display: "block",
            margin: "auto",
            maxWidth: "100%",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        />
      </CardContent>
    </Card>
  );
}
