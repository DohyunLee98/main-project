import React, { useState } from "react";
import "../../../styles/ProjectPage.css";

const initialData = {
  "/": {
    directories: ["folder1", "folder2"],
    files: ["file1.txt", "file2.jpg"],
  },
  "/folder1/": {
    directories: ["subfolder1"],
    files: ["file3.docx"],
  },
  "/folder1/subfolder1/": {
    directories: [],
    files: ["file4.pdf"],
  },
  "/folder2/": {
    directories: [],
    files: ["file5.png", "file6.mp4"],
  },
};

const DirectoryViewer = () => {
  const [currentPath, setCurrentPath] = useState("/");
  const [directories, setDirectories] = useState(initialData["/"].directories);
  const [files, setFiles] = useState(initialData["/"].files);

  const handleDirectoryClick = (subDirectory) => {
    const newPath = `${currentPath}${subDirectory}/`;
    setCurrentPath(newPath);
    setDirectories(initialData[newPath].directories);
    setFiles(initialData[newPath].files);
  };

  const handleGoBack = () => {
    const parentPath = currentPath.split("/").slice(0, -2).join("/") + "/";
    setCurrentPath(parentPath);
    setDirectories(initialData[parentPath].directories);
    setFiles(initialData[parentPath].files);
  };

  return (
    <div className="document-container">
      <h3>Current Path: {currentPath}</h3>
      {currentPath !== "/" && <button onClick={handleGoBack}>Go Back</button>}
      <ul>
        {directories.map((dir) => (
          <li key={dir} onClick={() => handleDirectoryClick(dir)}>
            📁 {dir}
          </li>
        ))}
        {files.map((file) => (
          <li key={file}>📄 {file}</li>
        ))}
      </ul>
    </div>
  );
};

export default Document;
