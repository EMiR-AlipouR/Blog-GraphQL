import { useMutation } from "@apollo/client";
import { Grid, TextField, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SEND_COMMENT } from "../../GraphQL/Mutation";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../../shared/Loader";
function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  const clickHandler = () => {
    if (name && email && text) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn("تمام فیلد ها را پر کنید",{position: "top-center"});
    }
  };
useEffect(()=>{
      if(data&&pressed){
    toast.success("در حال بررسی ",{position: "top-center"});
    setPressed(false)
  }

},[data,pressed])
//   if (loading) return null;
  if (error) return <h1>...error</h1>;
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
          borderRadius: 6,
          padding: 4,
          mt:10
        }}>
        <Typography
          component="p"
          variant="h6"
          m={2}
          color="primary"
          fontWeight="700">
          ارسال کامنت
        </Typography>
        <Grid container m={2}>
          <Grid size={{ xs: 12 }} spacing={2}>
            <TextField
              label="نام کاربر"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="8"
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12 }} spacing={2} my={2}>
            <TextField
              label="ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="8"
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12 }} spacing={2}>
            <TextField
              label="کامنت"
              value={text}
              multiline
              onChange={(e) => setText(e.target.value)}
              fullWidth
              margin="8"
              variant="outlined"
              minRows={4}
            />
          </Grid>
          {loading ? (
            <Button
              variant="contained"
              size="medium"
              //   color="primary"
              disabled
              sx={{ width: "100%", borderRadius: 2, mt: 2 }}>
              درحال بررسی
            </Button>
          ) : (
            <Button
              variant="contained"
              size="medium"
              color="primary"
              sx={{ width: "100%", borderRadius: 2, mt: 2 }}
              onClick={clickHandler}>
              ثبت
            </Button>
          )}
        </Grid>
        <ToastContainer />
      </Container>
    </>
  );
}

export default CommentForm;
