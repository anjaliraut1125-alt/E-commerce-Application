import { Routes , Route } from "react-router-dom";


import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Blog from "./components/Pages/Blog";
import PageNotFound from "./components/Pages/PageNotFound";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Product from "./components/Pages/Product";
import Dashboard from "./components/Admin/Dashboard";
import EditProduct from "./components/Admin/EditProduct";
import Products1 from "./components/Admin/Products1";
import AddProduct1 from "./components/Admin/AddProduct1";
// import Products from "./components/Admin/Products";
// import AddProduct from "./components/Admin/AddProduct";
// import EditProduct from "./components/Admin/EditProduct";








function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products1 />} />
          <Route path="/addproduct" element={<AddProduct1 />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />

          <Route path="*" element={<PageNotFound />} />
         
        </Routes>
    
    </>
  );
}

export default App;
