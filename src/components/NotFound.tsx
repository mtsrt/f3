import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>404</h1>
      <h3>お探しのページは見つかりませんでした。</h3>
      <Button onClick={() => navigate("/")}>LogInに戻る</Button>
    </div>
  );
};
