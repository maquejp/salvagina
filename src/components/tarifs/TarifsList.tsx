import {
  Card,
  CardContent,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import tarifs from "../../datas/tarifs";
import { TarifInterface } from "../../interfaces/TarifInterface";

export default function TarifsListComponent() {
  return (
    <Card id="tarifs" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Tarifs
        </Typography>
        <TableContainer sx={{ marginBottom: 2, marginTop: 2 }}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow sx={{ background: "#d9edf7" }}>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Tarif
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Week-end
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Semaine
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Jour(s) d'arrivée
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tarifs.map((tarif: TarifInterface, index: number) => (
                <TableRow
                  key={tarif.uuid}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                  }}
                >
                  <TableCell sx={{ textAlign: "center" }}>
                    {tarif.base}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {tarif.nuitweekend === "-" ? "" : `${tarif.nuitweekend} €`}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {tarif.semaine === "-" ? "" : `${tarif.semaine} €`}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {tarif.jourarrivee}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
