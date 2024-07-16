import {
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import trajetsData from "../../datas/trajets";
import { TrajetInterface } from "../../interfaces/TrajetInterface";

export default function AccederComponent() {
  return (
    <>
      <Typography variant="h6" sx={{ marginBottom: 2, marginTop: 2 }}>
        Voici des temps de trajets estimés:
      </Typography>
      <TableContainer
        sx={{
          marginBottom: 2,
          marginTop: 2,
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ background: "#d9edf7" }}>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                De
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                Distance
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                Durée
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trajetsData.map((trajet: TrajetInterface, index: number) => (
              <TableRow
                key={trajet.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                }}
              >
                <TableCell sx={{ textAlign: "center" }}>
                  {trajet.de.label}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {trajet.distance}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {trajet.temps}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
