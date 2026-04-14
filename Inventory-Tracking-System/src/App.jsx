import React from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
        Inventory Tracking System
      </Typography>

      <ProductForm />
      <ProductList />
    </Container>
  );
}

export default App;