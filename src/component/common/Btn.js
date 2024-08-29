const Btn = ({ onClick, children }) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default Btn;
