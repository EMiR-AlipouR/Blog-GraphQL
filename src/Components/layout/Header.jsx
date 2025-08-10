import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography component="h1" variant="h5" flex={1} fontWeight="700">
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                وبلاگ امیریو
              </Link>
            </Typography>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}>
              <BookIcon />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
