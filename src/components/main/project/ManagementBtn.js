import Btn from "../../common/Btn";

const ManagementBtn = ({ onClick }) => {
  return (
    <div>
      <Btn onClick={onClick}>관리</Btn>
    </div>
  );
};

export default ManagementBtn;
