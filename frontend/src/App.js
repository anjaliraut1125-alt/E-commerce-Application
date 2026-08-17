import { Routes , Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Blog from "./components/Pages/Blog";
import PageNotFound from "./components/Pages/PageNotFound";


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
      </Routes>
   </Layout>
   </>
  );
}

export default App;
