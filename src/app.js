import React from "react"; // Import the React library to create components and manage the app.
import ConnectButton from "./components/ConnectButton"; // Import the ConnectButton component from the components folder.

function App() {
  return (
    // The main component of the app that defines its structure and layout.
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      {/* The main heading of the app */}
      <h1>LinkedIn Auto Connect</h1>

      {/* Include the ConnectButton component to display and use it */}
      <ConnectButton />
    </div>
  );
}

export default App; // Export the App component so it can be used in other parts of the application.
