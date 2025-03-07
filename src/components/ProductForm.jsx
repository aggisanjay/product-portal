

import React, { useState, useEffect } from "react";
import { Button, TextField, Grid, Typography } from "@mui/material";
import { createProduct, updateProduct } from "../services/productService";

const ProductForm = ({ selectedProduct, onSave }) => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    price: "",
    storeName: "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData(selectedProduct);
    } else {
      setFormData({
        productName: "",
        productDescription: "",
        price: "",
        storeName: "",
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      updateProduct(selectedProduct.productId, formData);
    } else {
      createProduct(formData);
    }
    onSave();
    setFormData({ productName: "", productDescription: "", price: "", storeName: "" });
  };

  return (
    <>
      <Typography className="mt-4" variant="h6" align="center" >
        {selectedProduct ? "✏️ Edit Product" : "➕ Add Product"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Product Name"
              name="productName"
              fullWidth
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="productDescription"
              fullWidth
              value={formData.productDescription}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Price"
              name="price"
              type="number"
              fullWidth
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Store Name"
              name="storeName"
              fullWidth
              value={formData.storeName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              {selectedProduct ? "Update Product" : "Add Product"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ProductForm;
