import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavigationItemInterface } from "../interfaces/NavigationInterface";

export default function NavigationComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navItems: NavigationItemInterface[] = [
    { id: "accueil", label: "Accueil" },
    { id: "riomar", label: "Riomar" },
    { id: "acces", label: "Accès" },
    { id: "villa", label: "Villa" },
    { id: "contact", label: "Contact" },
  ];
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ background: "#2fa4e7", height: "100%" }}
    >
      <Typography
        fontSize={"medium"}
        sx={{ my: 2, color: "#fff", textAlign: "center" }}
      >
        Salvagina
      </Typography>
      <List sx={{ textAlign: "left" }}>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
          >
            <ListItemText
              primary={item.label}
              sx={{ fontSize: "small", color: "#fff" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ background: "#2fa4e7" }}>
        <Toolbar>
          <Typography fontSize={"large"} component="div" sx={{ flexGrow: 1 }}>
            Salvagina
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                sx={{ color: "#fff", fontSize: "medium" }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}
