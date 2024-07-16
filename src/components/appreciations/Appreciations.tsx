import appreciationsData from "../../datas/appreciations";
import { Box, Typography, Paper } from "@mui/material";
import { AppreciationInterface } from "../../interfaces/AppreciationInterface";

export default function AppreciationsComponent() {
  return (
    <Box
      sx={{
        maxWidth: "80%",
        mx: "auto",
        p: 2,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {appreciationsData.map((appreciation: AppreciationInterface) => (
        <Paper
          key={appreciation.de}
          sx={{
            p: 2,
            my: 2,
            bgcolor: "#f9f9f9",
            borderLeft: "5px solid #ccc",
            boxShadow: 1,
          }}
        >
          <Typography
            variant="body1"
            component="blockquote"
            sx={{ fontStyle: "italic" }}
          >
            "{appreciation.text}"
          </Typography>
          <Typography
            variant="body2"
            component="cite"
            sx={{ textAlign: "right", display: "block", color: "#555" }}
          >
            - {appreciation.de}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}
