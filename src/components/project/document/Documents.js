import React, { useState } from "react";
import Btn from "../../common/Btn.js";
import Document from "./Document";

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

function DirectoryViewer() {
  const [addFileModalOpen, setAddFileModalOpen] = useState(false);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // 선택된 파일 상태
  const [currentPath, setCurrentPath] = useState("/");
  const [directories, setDirectories] = useState(initialData["/"].directories);
  const [files, setFiles] = useState(initialData["/"].files);
  const [editingItem, setEditingItem] = useState(null);
  const [newName, setNewName] = useState("");

  const openAddFileModal = () => {
    setAddFileModalOpen(true);
  };

  const closeAddFileModal = () => {
    setAddFileModalOpen(false);
  };

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

  const createDirectory = () => {
    console.log("폴더생성");
  };

  const createDocument = () => {
    console.log("문서생성");
  };

  const handleDoubleClick = (item) => {
    setEditingItem(item);
    setNewName(item);
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleBlur = () => {
    if (editingItem && newName) {
      const updateItem = (list) =>
        list.map((item) => (item === editingItem ? newName : item));

      if (directories.includes(editingItem)) {
        setDirectories(updateItem(directories));
      } else if (files.includes(editingItem)) {
        setFiles(updateItem(files));
      }
    }
    setEditingItem(null);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleBlur();
    }
  };

  const openDocumentModal = (file) => {
    setSelectedFile(file); // 클릭한 파일 이름을 저장
    setShowDocumentModal(true); // 모달 열기
  };

  const closeDocumentModal = () => {
    setShowDocumentModal(false); // 모달 닫기
    setSelectedFile(null); // 선택된 파일 초기화
  };

  const addFileModal = () => {
    return (
      <div
        id="modal-background"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <button onClick={createDirectory}>폴더 생성</button>
          <button onClick={createDocument}>문서 생성</button>
          <button onClick={closeAddFileModal}>취소</button>
        </div>
      </div>
    );
  };

  const documentModal = () => {
    return (
      <div
        id="modal-background"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Document fileName={selectedFile} />
          <button onClick={closeDocumentModal}>닫기</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Btn onClick={openAddFileModal}>추가</Btn>
      {addFileModalOpen && addFileModal()}
      {showDocumentModal && documentModal()}
      <div>
        {currentPath !== "/" && <button onClick={handleGoBack}>Go Back</button>}
        <ul>
          {directories.map((dir) => (
            <li key={dir} onDoubleClick={() => handleDoubleClick(dir)}>
              {editingItem === dir ? (
                <input
                  type="text"
                  value={newName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyPress}
                  autoFocus
                />
              ) : (
                <span onClick={() => handleDirectoryClick(dir)}>📁 {dir}</span>
              )}
            </li>
          ))}
          {files.map((file) => (
            <li key={file} onDoubleClick={() => handleDoubleClick(file)}>
              {editingItem === file ? (
                <input
                  type="text"
                  value={newName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyPress}
                  autoFocus
                />
              ) : (
                <div>
                  {/* 파일 클릭 시 모달 열기 */}
                  <span onClick={() => openDocumentModal(file)}>📄 {file}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DirectoryViewer;
