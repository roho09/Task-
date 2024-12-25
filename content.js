// Create a floating button
const button = document.createElement("button");
button.textContent = "Connect with All";
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.zIndex = "1000";
button.style.padding = "10px 20px";
button.style.backgroundColor = "#0073b1"; // LinkedIn blue
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
document.body.appendChild(button);

// Add click event listener to the button
button.addEventListener("click", () => {
  const connectButtons = Array.from(document.querySelectorAll("button")).filter(
    (btn) => btn.innerText.includes("Connect") && btn.offsetParent !== null
  );

  if (connectButtons.length === 0) {
    alert("No Connect buttons found!");
    return;
  }

  connectButtons.forEach((btn) => btn.click());
  alert(`${connectButtons.length} connection requests sent!`);
});
