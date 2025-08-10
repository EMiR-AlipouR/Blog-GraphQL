import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../GraphQL/queries";
import { useQuery } from "@apollo/client";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardEl from "../../shared/CardEl";
import Loader from "../../shared/Loader";
function AuthorPage() {
  const { slug } = useParams();
  console.log("Author slug is : ", slug);

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  console.log("authorPage",loading, data, error);
  if (loading) return<Loader/>;
  if (error) return <h1>...error</h1>;
  const { author:{name,field,avatar,description,post} } = data;

  return (
    <>
      <Container maxWidth="lg">
        <Grid container display="flex" justifyContent="center" marginTop={5}>
          <Grid
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center">
            <Avatar src={avatar.url} sx={{ width: 160, height: 160 }} />
            <Typography component="h3" variant="h5" mt={2} fontWeight="700">
              {name}
            </Typography>
            <Typography component="p" variant="h5" mb={3}>
              {field}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <div
              dangerouslySetInnerHTML={{
                __html: description.html,
              }}></div>
          </Grid>
        </Grid>
        <Typography component="h3" variant="h5" fontWeight="700">
          مقالات {name} :
        </Typography>
        <Grid container gap={2} size={{ xs: 12, sm: 6, md: 4 }}>
          {post.map((post) => {
            return (
              <Grid mt={4} key={post.id}>
                <CardEl
                  title={post.title}
                  coverPhoto={post.coverPhoto}
                  slug={post.slug}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default AuthorPage;
