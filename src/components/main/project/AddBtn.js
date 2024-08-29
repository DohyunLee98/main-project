import { useState } from "react";
import Btn from "../../common/Btn";

const AddBtn = ({ onClick }) => {
  const [isNewPage, setIsNewPage] = useState(false);

  const addProject = () => {
    setIsNewPage(true);
  };

  return (
    <div>
      <Btn onClick={addProject}>추가</Btn>
      {isNewPage ? "헤헤" : "에에"}
    </div>
  );
};

export default AddBtn;
