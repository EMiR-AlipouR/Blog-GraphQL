
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import Layout from "./Components/layout/index";
import AuthorPage from "./Components/Authors/AuthorPage";
import BlogPage from "./Components/Blog/BlogPage";
import Blog from "./Components/Blog/Blog";
import Authors from "./Components/Authors/Authors";
import { Directions } from "@mui/icons-material";

function App() {

  return (
    <>
<Layout>
<Routes>
  
  <Route path="/" element={<HomePage/>} />
  <Route path="blogs/:slug" element={<BlogPage/>} />
  <Route path="authors/:slug" element={<AuthorPage/>} />
  <Route path="authors" element={<Authors/>} />
  <Route path="blogs" element={<Blog/>} />
  <Route path="*" element={<h1 style={{display:"flex", justifyContent:"center", alignItems:"center", height:"65vh" }}>🥲 Page Not Found 404 </h1>} />
</Routes>
</Layout>
    </>
  );
}

export default App;
