import React from "react";
import { GET_AUTHORS_INFO } from "../../GraphQL/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import Loader from "../../shared/Loader";
function Authors() {
  const { loading, error, data } = useQuery(GET_AUTHORS_INFO);
  console.log("author",loading, data); //id, name, slug, avatar
  const { pathname } = useLocation();


  if (loading) return <Loader/>;
  if (error) return <h1>...error</h1>;
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          // maxWidth: 345,
          boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
          borderRadius: 4,
          padding:2,
          m:pathname==="/authors"?8:0,
        }}>
        {data.authors.map((author, index) => (
          <React.Fragment key={author.id}>
            <Grid  
              sx={{
                gap: 2,
       
              }}
              size={{ xs: 12 }}>
              <Link to={`/authors/${author.slug}`} style={{                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                cursor: "pointer", textDecoration: "none", color: "inherit" }}>
              <Avatar src={author.avatar.url} />
              <Typography variant="p" component="p" marginRight={1.5}>
                {author.name}
              </Typography>
              </Link>
            </Grid>
            {index!== data.authors.length -1 && (
              <Grid  size={{ xs: 12 }}>
                <Divider variant="middle" />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
}

export default Authors;
