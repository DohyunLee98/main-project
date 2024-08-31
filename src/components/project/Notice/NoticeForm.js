import React, { useState } from "react";

const NoticeForm = ({ onAddNotice, onCancel }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNotice = () => {
    if (title.trim() && content.trim()) {
      onAddNotice({
        title,
        content,
        date: new Date().toLocaleString("ko-KR", {
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
      // 현재 시간을 "MM-dd HH:mm" 형식으로 추가
      setTitle("");
      setContent("");
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <input
        type="text"
        placeholder="공지 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", marginBottom: "5px" }}
      />
      <textarea
        placeholder="공지 내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: "100%", marginBottom: "5px" }}
      />
      <button
        onClick={handleAddNotice}
        style={{ width: "48%", marginRight: "4%" }}
      >
        공지 추가
      </button>
      <button onClick={onCancel} style={{ width: "48%" }}>
        취소
      </button>
    </div>
  );
};

export default NoticeForm;
