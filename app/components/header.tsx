// components/Header.tsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = ["Home", "Projects", "About", "Contact"];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {navLinks.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton
              component={NavLink}
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              sx={{
                "&.active": { fontWeight: "bold", color: "primary.main" },
              }}
            >
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#F0F0FE", color: "black" }}
    >
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            KanhaDev
          </Typography>
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((page) => (
              <Button
                key={page}
                color="inherit"
                component={NavLink}
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                sx={{
                  "&.active": { fontWeight: "bold", color: "primary.main" },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* Mobile Navigation */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Improves performance on mobile
          }}
        >
          {drawer}
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default Header;
