import Btn from "../../common/Btn";

const ManagementBtn = ({ onClick }) => {
  const test = () => {
    console.log("헤헤");
  };

  return (
    <div>
      <Btn onClick={test}>관리</Btn>
    </div>
  );
};

export default ManagementBtn;
