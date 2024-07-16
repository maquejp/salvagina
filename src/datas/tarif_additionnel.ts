import { TarifAdditionnelInterface } from "../interfaces/TarifAdditionnel";

const tarifAdditionnelData: TarifAdditionnelInterface[] = [
  {
    uuid: "0",
    base: "Frais de nettoyage (Obligatoire)",
    prix: 85,
    description: "",
  },
  {
    uuid: "1",
    base: "Caution (Obligatoire)",
    prix: 300,
    description: "",
  },
  {
    uuid: "2",
    base: "Charges (Eau/Electricité)",
    prix: undefined,
    description: "Inclus\nAttention: Chauffage électrique!!",
  },
  {
    uuid: "3",
    base: "Service draps de lits (Optionnel)",
    prix: 10,
    description: "par personne",
  },
];
export default tarifAdditionnelData;
