import React, { useState } from 'react';

const ToggleColor = () => {
  const [color, setColor] = useState("white");
  const [text, setText] = useState("Switch to Night");

  const handleButton = () => {
    color === "white" ? (setColor("black"), setText("Switch to day")) : (setColor("white"), setText("Switch to Night"));
    }
  

  return (
    <div style={{ backgroundColor: color, height: "100vh", width: "100vw", display:"flex",justifyContent:"center", alignItems: "center", textAlign: "center" }}>
      <button onClick={handleButton}>{text}</button>
    </div>
  );
};

export default ToggleColor;
