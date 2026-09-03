import { Routes , Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Blog from "./components/Pages/Blog";
import PageNotFound from "./components/Pages/PageNotFound";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Product from "./components/Pages/Product";



function App() {
  return (
    <>
   <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product" element={<Product/>}/>


      
      </Routes>
   </Layout>
   </>
  );
}

export default App;
