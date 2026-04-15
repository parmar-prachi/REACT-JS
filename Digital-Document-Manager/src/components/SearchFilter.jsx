import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/fileSlice";

const SearchFilter = () => {
    const dispatch = useDispatch();

    return (
        <input
            placeholder="Search files..."
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="border p-2 w-full"
        />
    );
};

export default SearchFilter;