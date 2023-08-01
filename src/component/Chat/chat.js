import React, { useState } from "react";
import "./chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, inputMessage]);
      setInputMessage("");
    }
  };

  return (
    <div className="w-full h-[800px] flex justify-center items-center">
      <div className="h-[432px] w-[406px] chat">
      <div className="hi">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="407"
            height="155"
            viewBox="0 0 407 155"
            fill="none"
          >
            <path
              d="M0 30C0 13.4315 13.4315 0 30 0H377C393.569 0 407 13.4315 407 30V147C300.457 115.386 119.705 174.298 0 147V30Z"
              fill="url(#paint0_linear_445_2434)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_445_2434"
                x1="203.5"
                y1="7.62762e-05"
                x2="-139.76"
                y2="393.904"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#000F1E" />
                <stop offset="1" stop-color="#BC4749" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <img
            src="Chat.svg"
            alt="ram"
            style={{
              height: "16px",
              width: "21px",
              marginTop: "-9rem",
              marginLeft: "365px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyItems: "center",
              justifyContent: "space-evenly",
              marginTop: "-5px",
            }}
          >
            <img src="cmplogo.svg" alt="trde" />
            <img src="Hi there.svg" alt="iuytr" />
            <img src="Hi 1.svg" alt="iuytr" />
          </div>
          </div>

        <div className="chat-messages" id="chat-messages" style={{paddingLeft:"2rem",marginTop:'-1rem'}}>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>

        <hr
          style={{ color: "#757575", marginTop: "12rem", height: "1rem" }}
        />

        <input
          type="text"
          name="text"
          placeholder="Enter your message..."
          style={{ display: "inline", paddingLeft: "2rem", }}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />

        {/* Add the dropdown image with an onClick event */}
        <img
         src="box.svg"
          alt="iuytr"
          style={{ paddingLeft: "21rem", cursor: "pointer",marginTop:'-2.8rem'  }}
          onClick={handleSendMessage}
        />

<img
          src="emoji.svg"
          alt="iuytr"
          style={{ paddingLeft: "2rem", marginTop: "0.1rem" }}
        />
      </div>
    </div>
  );
}

export default Chat;
