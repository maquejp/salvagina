import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import inventaireData from "../datas/inventaire";

export default function InventaireView() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (section: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? section : false);
    };

  return (
    <Card id="inventaire" sx={{ padding: 2, marginBottom: 3 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#2fa4e7",
            marginBottom: 2,
          }}
        >
          Inventaire du matériel
        </Typography>
        {inventaireData.map((inventaire) => (
          <Accordion
            key={inventaire.section}
            expanded={expanded === inventaire.section}
            onChange={handleChange(inventaire.section)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: "bold" }}>
                {inventaire.section}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {[...Array(Math.ceil(inventaire.items.length / 10))].map(
                  (_, colIndex) => (
                    <Grid item xs={6} key={colIndex}>
                      <List>
                        {inventaire.items
                          .slice(colIndex * 10, (colIndex + 1) * 10)
                          .map((item, rowIndex) => (
                            <ListItem key={rowIndex} sx={{ padding: 0 }}>
                              {item}
                            </ListItem>
                          ))}
                      </List>
                    </Grid>
                  )
                )}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
}
