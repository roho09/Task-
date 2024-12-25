import React from "react";

const ConnectButton = () => {
  const handleClick = () => {
    // Send a message to the background script
    chrome.runtime.sendMessage({ action: "triggerConnect" }, (response) => {
      if (response) {
        alert(response.message || "Action completed!");
      }
    });
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#0073b1", // LinkedIn blue
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Connect with All
    </button>
  );
};

export default ConnectButton;
