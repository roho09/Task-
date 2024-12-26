// Create a floating button on the webpage
const button = document.createElement("button"); // Make a new button element
button.textContent = "Connect with All"; // Set the button's text
button.style.position = "fixed"; // Keep the button fixed in place on the screen
button.style.bottom = "20px"; // Position it 20px from the bottom of the screen
button.style.right = "20px"; // Position it 20px from the right side of the screen
button.style.zIndex = "1000"; // Ensure the button appears on top of other elements
button.style.padding = "10px 20px"; // Add some padding inside the button
button.style.backgroundColor = "#0073b1"; // Use LinkedIn's blue color for the background
button.style.color = "white"; // Set the text color to white
button.style.border = "none"; // Remove any border around the button
button.style.borderRadius = "5px"; // Make the button corners rounded
button.style.cursor = "pointer"; // Change the mouse cursor to a pointer when hovering
document.body.appendChild(button); // Add the button to the webpage

// Add functionality to the button when clicked
button.addEventListener("click", () => {
  // Find all "Connect" buttons on the page that are visible
  const connectButtons = Array.from(document.querySelectorAll("button")).filter(
    (btn) => 
      btn.innerText.includes("Connect") && // Check if the button's text includes "Connect"
      btn.offsetParent !== null // Make sure the button is visible on the page
  );

  // If no "Connect" buttons are found, show an alert and stop
  if (connectButtons.length === 0) {
    alert("No Connect buttons found!"); // Show an alert message
    return; // Exit the function
  }

  // Click all the "Connect" buttons one by one
  connectButtons.forEach((btn) => btn.click()); // Simulate a click on each button

  // Show a message with the total number of connection requests sent
  alert(`${connectButtons.length} connection requests sent!`);
});
