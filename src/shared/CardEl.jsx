import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader, Divider } from "@mui/material";
import { Link } from "react-router-dom";
function CardEl({ title, coverPhoto, author, slug }) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
          borderRadius: 4,
        }}>
        {author ? (
          <CardHeader
            avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
            title={
              <Typography variant="p" color="text.primary">
                {author.name}
              </Typography>
            }
          />
        ) : null}

        <CardMedia
  component="img"
  height="200"
  image={coverPhoto?.url || defaultCover}
  alt={slug}
  sx={{

    objectFit: "cover",
    objectPosition: "center 30%",  // اینجا نقطه برش تصویر رو تنظیم کردیم
    width: "100%",
    height: "300px",
    display: "block",
  }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3" marginBottom={2}>
            {title}
          </Typography>
          <Divider />
        </CardContent>
        <CardActions>
          <Link
            to={`/blogs/${slug}`}
            style={{ textDecoration: "none", width: "100%" }}>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              sx={{ width: "100%", borderRadius: 3 }}>
              مطالعه بیشتر
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}

export default CardEl;
