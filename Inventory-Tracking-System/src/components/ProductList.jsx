import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase/firebase";
import { fetchProducts, deleteProduct, setProducts } from "../features/productSlice";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
} from "@mui/material";

const ProductList = () => {
    const dispatch = useDispatch();
    const { items, loading } = useSelector((state) => state.products);

    useEffect(() => {
        const productsRef = ref(db, "products");

        const unsubscribe = onValue(productsRef, (snapshot) => {
            const data = snapshot.val();
            const loadedProducts = data
                ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
                : [];

        
            dispatch(setProducts(loadedProducts));
        });

       
        return () => unsubscribe();
    }, [dispatch]);

    if (loading) return <Typography>Loading...</Typography>;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Stock</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>₹{item.price}</TableCell>

                            <TableCell
                                style={{
                                    color: item.stock < 5 ? "red" : "green",
                                }}
                            >
                                {item.stock}
                            </TableCell>

                            <TableCell>
                                <Button
                                    color="error"
                                    onClick={() =>
                                        dispatch(deleteProduct(item.id))
                                    }
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductList;