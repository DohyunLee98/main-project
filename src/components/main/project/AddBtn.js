import Btn from "../../common/Btn";
import { requestNewProject } from "../../../modules/main";
import { useNavigate } from "react-router-dom";

const AddBtn = ({ onClick }) => {
  const navigate = useNavigate();

  const addProject = async () => {
    const response = await requestNewProject();
    console.log("addBtn 컴포넌트 " + JSON.stringify(response.data[0]));
    navigate(`/${response.data[0].id}`, {
      state: response.data[0],
    });
  };

  return (
    <div>
      <Btn onClick={addProject}>추가</Btn>
    </div>
  );
};

export default AddBtn;
