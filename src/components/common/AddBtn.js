import Btn from "./Btn";

const AddBtn = ({ onClick }) => {
  return (
    <Btn onClick={onClick} colorScheme="blue">
      추가
    </Btn>
  );
};

export default AddBtn;
