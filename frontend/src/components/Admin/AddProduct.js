import React, { useState } from "react";
import "./AddProduct.css";
import Layout from "./Layout";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
    description: "",
    price: "",
    discount: "",
    stock: "",
    sku: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product Data:", product);

    alert("Product added successfully!");
  };

  return (
    <Layout>
    <div className="add-product-page">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1>Add Product</h1>
          <p>Add a new product to your ecommerce store</p>
        </div>

        <button className="back-btn">← Back to Products</button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="product-card">
          <h2>Basic Information</h2>

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category</label>

              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Beauty">Beauty</option>
                <option value="Home">Home & Kitchen</option>
                <option value="Sports">Sports</option>
              </select>
            </div>

            <div className="form-group">
              <label>Brand</label>

              <input
                type="text"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                placeholder="Enter brand name"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Product Description</label>

            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Enter product description"
              rows="5"
              required
            ></textarea>
          </div>
        </div>

        {/* Price & Inventory */}
        <div className="product-card">
          <h2>Price & Inventory</h2>

          <div className="form-row">
            <div className="form-group">
              <label>Price (₹)</label>

              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Enter price"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label>Discount (%)</label>

              <input
                type="number"
                name="discount"
                value={product.discount}
                onChange={handleChange}
                placeholder="0"
                min="0"
                max="100"
              />
            </div>

            <div className="form-group">
              <label>Stock Quantity</label>

              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                placeholder="Enter stock"
                min="0"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>SKU</label>

              <input
                type="text"
                name="sku"
                value={product.sku}
                onChange={handleChange}
                placeholder="Example: IP15-128-BLK"
              />
            </div>

            <div className="form-group">
              <label>Product Status</label>

              <select
                name="status"
                value={product.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Image */}
        <div className="product-card">
          <h2>Product Image</h2>

          <div className="image-upload">
            <div className="upload-icon">📷</div>

            <h3>Upload Product Image</h3>

            <p>PNG, JPG or JPEG up to 5MB</p>

            <input type="file" accept="image/png, image/jpeg, image/jpg" />
          </div>
        </div>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="button" className="cancel-btn">
            Cancel
          </button>

          <button type="submit" className="add-btn">
            + Add Product
          </button>
        </div>
      </form>
    </div>
    </Layout>
  );
};
export default AddProduct;
