import { useState } from "react";
import Btn from "../../common/Btn";
import { requestNewProject } from "../../../modules/main";
import { useNavigate } from "react-router-dom";

const AddBtn = ({ onClick }) => {
  const [newProject, setNewProject] = useState(null);
  const navigate = useNavigate();

  const addProject = async () => {
    const response = await requestNewProject();
    setNewProject(response);
    navigate("/project", { state: { newProject: response } });
  };

  return (
    <div>
      <Btn onClick={addProject}>추가</Btn>
    </div>
  );
};

export default AddBtn;
