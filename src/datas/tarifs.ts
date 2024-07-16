import { TarifInterface } from "../interfaces/TarifInterface";

const tarifsData: TarifInterface[] = [
  {
    uuid: "0",
    base: "Basse Saison",
    datedebut: "-",
    datefin: "-",
    nombredenuitmin: "-",
    nuitweekend: "430",
    semaine: "550",
    jourarrivee: "Lundi, Vendredi",
  },
  {
    uuid: "1",
    base: "Moyenne Saison",
    datedebut: "-",
    datefin: "-",
    nombredenuitmin: "-",
    nuitweekend: "540",
    semaine: "660",
    jourarrivee: "Lundi, Vendredi",
  },
  {
    uuid: "2",
    base: "Vacances scolaire",
    datedebut: "",
    datefin: "",
    nombredenuitmin: "3",
    nuitweekend: "-",
    semaine: "750",
    jourarrivee: "Vendredi, Samedi",
  },
  {
    uuid: "3",
    base: "Eté (Juillet/Août)",
    datedebut: "",
    datefin: "",
    nombredenuitmin: "7",
    nuitweekend: "-",
    semaine: "860",
    jourarrivee: "Samedi",
  },
];

export default tarifsData;
