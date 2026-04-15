import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadFile } from "../features/fileSlice";

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [category, setCategory] = useState("Personal");
    const dispatch = useDispatch();

    const handleUpload = () => {
        if (!file) return alert("Select file");
        dispatch(uploadFile({ file, category }));
    };

    return (
        <div className="p-4 border">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <select onChange={(e) => setCategory(e.target.value)}>
                <option>Personal</option>
                <option>Academic</option>
                <option>Office</option>
            </select>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadFile;