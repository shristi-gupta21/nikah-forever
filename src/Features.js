import React from "react";

const Features = () => {
  return (
    <div className="features">
      <div className="feature">
        <img src={process.env.PUBLIC_URL + "./assets/audio-chat1.jpg"} alt="" />
        <div className="text">
          <span>Audio Chat</span>
          <p>
            Enable users to communicate through audio chat, providing a
            convenient way to connect with potential partners.
          </p>
        </div>
      </div>
      <div className="feature2">
        <div className="text">
          <span>Unlimited Messaging</span>
          <p>
            Offer unlimited messaging capabilities to users, allowing them to
            freely exchange messages with each other.{" "}
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + "./assets/unlimited-msging.jpg"}
          alt=""
        />
      </div>
      <div className="feature">
        <img src={process.env.PUBLIC_URL + "./assets/video-chat.png"} alt="" />
        <div className="text">
          <span>Video Chat</span>
          <p>
            Provide a video chat feature that enables users to have face-to-face
            conversations and get to know each other better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
