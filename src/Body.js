import React from "react";

const Body = () => {
  return (
    <div className="body">
      <video width="100%" height="1070px" autoPlay loop muted>
        <source
          src={process.env.PUBLIC_URL + "./assets/video.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="cover">
        <div className="login">
          <span className="heading">Login</span>
          <label htmlFor="">Enter your email</label>
          <input type="email" name="" id="" />
          <label htmlFor="">Enter your password</label>

          <input type="password" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
