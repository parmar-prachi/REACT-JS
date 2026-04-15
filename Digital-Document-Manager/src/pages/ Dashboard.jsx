import React from "react";
import UploadFile from "../components/UploadFile";
import FileList from "../components/FileList";
import SearchFilter from "../components/SearchFilter";

const Dashboard = () => {
    return (
        <div className="p-5">
            <h1>📁 Digital Document Manager</h1>
            <UploadFile />
            <SearchFilter />
            <FileList />
        </div>
    );
};

export default Dashboard;