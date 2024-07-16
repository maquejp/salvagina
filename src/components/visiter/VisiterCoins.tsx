import { Typography } from "@mui/material";

export default function VisiterCoinsComponent() {
  return (
    <>
      <Typography variant="h6">Coins</Typography>
      <Typography>La région est parfaite pour les randonneurs.</Typography>
      <Typography>
        A quelques mètres de la maison, vous trouverez le{" "}
        <a target="_blank" href="https://www.fortdambleteuse.com/">
          fort Mahon
        </a>{" "}
        (Vauban).
      </Typography>
      <Typography>
        Il y a aussi des musées sur la seconde guerre mondial avec sur la
        commune le{" "}
        <a target="_blank" href="http://www.musee3945.com/">
          {" "}
          Musée 39-45
        </a>
        .
      </Typography>
      <Typography>
        Il y a aussi la{" "}
        <a href="http://www.mimoyecques.com/">Forteresse de Mimoyecques</a>.
      </Typography>
      <Typography>
        La région dispone d'autres monuments et sites à visiter, pour plus
        d'informations rendez vous sur un des sites en rapport avec la{" "}
        <a href="http://www.cote-dopale.com/tourisme/monuments-historiques/">
          Côte d'Opale
        </a>
        .
      </Typography>
    </>
  );
}
