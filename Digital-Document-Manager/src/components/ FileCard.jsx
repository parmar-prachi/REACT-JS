import React from "react";
import { useDispatch } from "react-redux";
import { deleteFile } from "../features/fileSlice";

const FileCard = ({ file }) => {
    const dispatch = useDispatch();

    return (
        <div className="border p-3 m-2">
            <p><strong>{file.name}</strong></p>
            <p>{file.type}</p>
            <p>{file.category}</p>

            <a href={file.url} target="_blank">View</a>

            <button
                onClick={() => dispatch(deleteFile({ id: file.id, name: file.name }))}
            >
                Delete
            </button>
        </div>
    );
};

export default FileCard;