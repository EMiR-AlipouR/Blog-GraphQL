import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEl from "../../shared/CardEl";
import { useLocation } from "react-router-dom";
import Loader from "../../shared/Loader";


function Blog() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log("blog : ",loading, data);

  const {pathname} = useLocation();
  // console.log( "pathName is : ",pathname)//for add style to blogs with pathname is blogs





if (loading) return <Loader/>;
if (error) return <h1>...error</h1>;
return (
  <>
      <Grid container spacing={2} sx={{ padding:pathname==="/blogs"?8:0, flexWrap: "wrap" }}>
        {data.posts.map((post) => (
          <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
            {<CardEl {...post} />}
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Blog;
