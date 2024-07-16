import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import tarifAdditionnelData from "../../datas/tarif_additionnel";
import { TarifAdditionnelInterface } from "../../interfaces/TarifAdditionnel";

export default function TarifAdditionalComponent() {
  return (
    <Card id="tarif-additionnel" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Tarifs additionnel
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
            <TableBody>
              {tarifAdditionnelData.map(
                (tarif: TarifAdditionnelInterface, index: number) => (
                  <TableRow
                    key={tarif.uuid}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                    }}
                  >
                    <TableCell
                      sx={{
                        background: "#d9edf7",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      {tarif.base}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {tarif.prix ? `${tarif.prix} €` : ""}
                      {tarif.description ? ` ${tarif.description}` : ""}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
