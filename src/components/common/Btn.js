import React from "react";
import Button from "@mui/material/Button";

const Btn = ({ onClick, children }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

export default Btn;
