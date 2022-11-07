import React from "react";
import Login from "./Login";
import Home from "./Home";

export const NotFound = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h1>404</h1>
      <h3>お探しのページは見つかりませんでした。</h3>
      <button onClick={<Login />}>LogInに戻る</button>
      <button onClick={<Home />}>Homeに戻る</button>
    </div>
  );
};
