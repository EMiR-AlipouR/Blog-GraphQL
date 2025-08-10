import { Padding } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "../Authors/Authors";
import Blog from "../Blog/Blog";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} mt={6}>
          <Grid size={{ xs: 12, md: 3 }} paddingRight={3}>
            <Typography component="h3" variant="h5" fontWeight={700} mb={3}>
              <Link
                to="/authors"
                style={{ textDecoration: "none", color: "inherit" }}>
                نویسندگان
              </Link>
            </Typography>
            <Authors />
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Typography component="h3" variant="h5" fontWeight={700} mb={3}>
             <Link to="/blogs" style={{ textDecoration: "none", color: "inherit" }}>
                بلاگ ها
              </Link>
            </Typography>
            <Blog />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
