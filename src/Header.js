import React from "react";

const Header = () => {
  return (
    <div className="header">
      <span class="material-symbols-outlined icon">menu</span>
      <div>
        <img src={process.env.PUBLIC_URL + "./assets/logo.png"} alt="" />
        <span>nikah forever</span>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Header;
