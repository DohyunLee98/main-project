import React, { useState } from "react";
import "../../styles/ProjectPage.css";
import { requestUpdate } from "../../modules/title";

const Title = ({ project }) => {
  const [formData, setFormData] = useState({
    title: project.title,
    description: project.description,
  });

  const [editingField, setEditingField] = useState(null);

  const handleDoubleClick = (field) => {
    setEditingField(field);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleBlurOrEnter = async () => {
    setEditingField(null);

    await requestUpdate({ projectId: project.id, updatedData: formData });
  };

  return (
    <div className="title-container">
      <div className="title">
        {editingField === "title" ? (
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            onBlur={handleBlurOrEnter}
            onKeyDown={(e) => e.key === "Enter" && handleBlurOrEnter()}
            autoFocus
          />
        ) : (
          <h2 onDoubleClick={() => handleDoubleClick("title")}>
            {formData.title}
          </h2>
        )}
      </div>
      <div className="description">
        {editingField === "description" ? (
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            onBlur={handleBlurOrEnter}
            onKeyDown={(e) => e.key === "Enter" && handleBlurOrEnter()}
            autoFocus
          />
        ) : (
          <h2 onDoubleClick={() => handleDoubleClick("description")}>
            {formData.description}
          </h2>
        )}
      </div>
      <div className="notice-section">
        <div className="notice-label">
          <h2 className="notice-text">●공지</h2>
        </div>
        <hr />
        <div className="notice-content">{/*<h2>{notice}</h2>*/}</div>
      </div>
    </div>
  );
};

export default Title;
