import React from "react";
import { useQuery } from "@apollo/client";
import Loader from "../../shared/Loader";
import { GET_POST_INFO } from "../../graphql/queries";
import { useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import sanitize from "sanitize-html";
import CommentForm from "../Comment/CommentForm";
import Comment from "../Comment/Comment";
// data received $ just use it.
function BlogPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  console.log("blogPage",loading, data, error);

  if (loading) return <Loader />;
  if (error) return <h1>...error</h1>;
  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          {/* <Grid size={{xs:12}}></Grid> */}
          <Grid
            size={{ xs: 12 }}
            marginTop={6}
            display="flex"
            justifyContent="space-between"
            alignContent="center">
            <Typography
              component="h3"
              variant="h4"
              fontWeight="700"
              color="primary">
              {data.post.title}
            </Typography>
            <ArrowBackRounded
              color="primary"
              onClick={() => navigate(-1)}
              sx={{ cursor: "pointer", fontSize: "40px" }}
            />
          </Grid>
          {/* ---------------------------------------------- */}
          <Grid size={{ xs: 12 }} display="flex" justifyContent="center" my={6}>
            <img
              src={data.post.coverPhoto.url}
              alt=""
              width="95%"
              height="500px"
              style={{ borderRadius: 20,objectFit:"revert", }}
            />
          </Grid>
          {/* ---------------------------------------------- */}
          <Grid size={{ xs: 12 }} display="flex" alignItems="center">
            <Avatar src={data.post.author.avatar.url} />
            <Box
              component="div"
              display="flex"
              alignItems="center"
              alignContent="center"
              flexDirection="column"
              sx={{ mr: 2 }}>
              <Typography component="p" variant="h7" fontWeight="700">
                {data.post.author.name}
              </Typography>
              <Typography component="p" variant="h7" fontWeight="300">
                {data.post.author.field}
              </Typography>
            </Box>
          </Grid>
          {/* ---------------------------------------------- */}

          <Grid size={{ xs: 12 }}>
            <div
              dangerouslySetInnerHTML={{
                __html:data.post.content.html,
              }}></div>
          </Grid>

          {/* ---------------------------------------------- */}
          <Grid size={{ xs: 12 }}>
            <CommentForm slug={slug} />
          </Grid>
          {/* ---------------------------------------------- */}
                    <Grid size={{ xs: 12 }}>
            <Comment slug={slug} />
          </Grid>
          {/* ---------------------------------------------- */}
        </Grid>
      </Container>
    </>
  );
}

export default BlogPage;
