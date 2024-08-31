import React, { useState } from "react";
import "../../styles/ProjectPage.css";

const Title = (project) => {
  const [title, setTitle] = useState(project.project[0].title);
  const [description, setDescription] = useState(
    project.project[0].description
  );
  const [notice, setNotice] = useState(project.project[0].notice);

  return (
    <div
      style={{
        width: "400px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <h2 style={{ textAlign: "center" }}>{description}</h2>
      {/* <h2 style={{ textAlign: "center" }}>{notice}</h2> */}
    </div>
  );
};

export default Title;
