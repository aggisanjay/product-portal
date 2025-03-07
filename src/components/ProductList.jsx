

import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { deleteProduct } from "../services/productService";

const ProductList = ({ search, filter, onEdit, onDelete, products }) => {
  const filteredProducts = products.filter(
    (product) =>
      product.productName.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "" || product.storeName === filter)
  );

  const handleDelete = (id) => {
    deleteProduct(id);
    onDelete();
  };

  return (
    <Grid container spacing={3}>
      {filteredProducts.map((product) => (
        <Grid item key={product.productId} xs={12} md={4}>
          <Card className="mt-4">
            <CardContent >
              <Typography variant="h6">{product.productName}</Typography>
              <Typography>{product.productDescription}</Typography>
              <Typography>Price: ₹{product.price}</Typography>
              <Typography>Store: {product.storeName}</Typography>
              <Button color="primary" onClick={() => onEdit(product)}>
                Edit
              </Button>
              <Button color="error" onClick={() => handleDelete(product.productId)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;


