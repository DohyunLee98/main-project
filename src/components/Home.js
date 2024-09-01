import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import backgroundImage from "../images/123456.jpg";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        padding: "0 10%",
      }}
    >
      <Box mb={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          It's time to show your <br /> <b>true potential</b>
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Sign up for <b>Next Level Creators</b>
        </Typography>
        <Typography variant="body1">
          Join Creti to use the most powerful tool for presenting your work to
          the world!
        </Typography>
      </Box>

      <Box
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "350px",
          width: "100%",
        }}
      >
        <TextField
          fullWidth
          label="이메일 입력"
          variant="outlined"
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          inputProps={{
            style: {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              borderRadius: "4px",
            },
          }}
        />
        <TextField
          fullWidth
          label="비밀번호 생성"
          variant="outlined"
          type="password"
          margin="normal"
          InputLabelProps={{ style: { color: "white" } }}
          inputProps={{
            style: {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              borderRadius: "4px",
            },
          }}
        />
        <Button
          fullWidth
          variant="contained"
          color="success"
          style={{ marginTop: "1rem" }}
        >
          가입하기
        </Button>

        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "1rem", color: "lightgray" }}
        >
          가입함으로써{" "}
          <a href="/terms" style={{ color: "white" }}>
            서비스 약관
          </a>
          과{" "}
          <a href="/privacy" style={{ color: "white" }}>
            개인정보 보호정책
          </a>
          에 동의하게 됩니다.
        </Typography>

        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "1rem", color: "lightgray" }}
        >
          또는
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          style={{ marginTop: "1rem", color: "white", borderColor: "white" }}
          onClick={() => {
            window.location.href =
              "https://localhost:8080/oauth2/authorization/google";
          }}
        >
          Google로 가입하기
        </Button>
        <Button
          fullWidth
          variant="outlined"
          style={{ marginTop: "1rem", color: "white", borderColor: "white" }}
        >
          Facebook으로 가입하기
        </Button>
      </Box>
    </div>
  );
};

export default Home;
