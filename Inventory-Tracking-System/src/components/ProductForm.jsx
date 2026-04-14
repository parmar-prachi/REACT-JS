import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";

import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
    Grid,
} from "@mui/material";

const ProductForm = () => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedProduct = {
            ...form,
            price: Number(form.price),
            stock: Number(form.stock),
        };
        dispatch(addProduct(form));
        setForm({ name: "", category: "", price: "", stock: "" });
    };

    return (
        <Card sx={{ mb: 3 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Add Product
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Product Name"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Category"
                                value={form.category}
                                onChange={(e) =>
                                    setForm({ ...form, category: e.target.value })
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                type="number"
                                label="Price"
                                value={form.price}
                                onChange={(e) =>
                                    setForm({ ...form, price: e.target.value })
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                type="number"
                                label="Stock"
                                value={form.stock}
                                onChange={(e) =>
                                    setForm({ ...form, stock: e.target.value })
                                }
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" type="submit">
                                Add Product
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
};

export default ProductForm;