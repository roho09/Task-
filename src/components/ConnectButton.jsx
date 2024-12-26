const ConnectButton = () => {
  // Function to handle button click
  const handleClick = () => {
    // Send a message to the background script
    chrome.runtime.sendMessage({ action: "triggerConnect" }, (response) => {
      // Check the response from the background script
      if (response) {
        // Show an alert with the response message or a default message
        alert(response.message || "Action completed!");
      }
    });
  };

  return (
    // Render a button with styling and an onClick event
    <button
      onClick={handleClick} // Attach the handleClick function to the button click event
      style={{
        padding: "10px 20px", // Add padding to make the button look nice
        backgroundColor: "#0073b1", // Use LinkedIn's blue color for the button background
        color: "white", // Set the button text color to white
        border: "none", // Remove any border from the button
        borderRadius: "5px", // Make the button corners rounded
        cursor: "pointer", // Change the mouse cursor to a pointer on hover
      }}
    >
      Connect with All {/* The text displayed on the button */}
    </button>
  );
};

export default ConnectButton; // Export the ConnectButton component so it can be used in other parts of the app.

