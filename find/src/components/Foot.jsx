import React from "react";
import { SocialIcon } from "react-social-icons";
import { Input, Button } from "antd";
const Foot = () => {
  return (
    <div class="comp"
      style={{
        marginTop: "20px",
        width: "100vw",
        boxSizing: "border-box",
        padding: "0 20vw",
        height: "8vh",
        background: "whitesmoke",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h2>NEWSLETTER SIGN</h2>
      <Input
        placeholder="Enter your email"
        style={{ width: "15vw", marginLeft: "1vw" }}
      />
      <Button style={{ marginLeft: "1vw" }}>Subscribe</Button>
      <h2 style={{ marginLeft: "1vw" }}>CONNECT US</h2>
      <SocialIcon
        url="https://twitter.com"
        style={{ transform: "scale(0.5, 0.5)" }}
      />
      <SocialIcon
        url="https://facebook.com"
        style={{ transform: "scale(0.5, 0.5)" }}
      />
      <SocialIcon
        url="https://instagram.com"
        style={{ transform: "scale(0.5, 0.5)" }}
      />
    </div>
  );
};

export default Foot;
