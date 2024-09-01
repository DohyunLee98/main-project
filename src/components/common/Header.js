import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();

  const toMainPage = () => {
    navigate("/main");
  };
  const handleLogout = () => {
    // 로그아웃 로직을 여기에 추가
    navigate("/");
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo" onClick={toMainPage}>
          Logo
        </div>
        <div className="spacer"></div>
        <button className="logout-button" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
