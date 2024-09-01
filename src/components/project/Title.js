import React, { useState } from "react";
import "../../styles/ProjectPage.css";

const Title = (project) => {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);

  return (
    <div className="title-container">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="description">
        <h2>{description}</h2>
      </div>
      <div className="notice-section">
        <div className="notice-label">
          <h2>●공지</h2>
        </div>
        <hr />
        <div className="notice-content">{/*<h2>{notice}</h2>*/}</div>
      </div>
    </div>
  );
};

export default Title;
