chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Listen for messages sent to the background script.
  // Check if the action in the message is "triggerConnect".
  if (message.action === "triggerConnect") {
    // Run a script on the tab that sent the message.
    chrome.scripting.executeScript(
      {
        target: { tabId: sender.tab.id }, // Specify the tab where the script will run.
        func: () => {
          // Find all buttons with the class "connect-button" on the webpage.
          const connectButtons = document.querySelectorAll(".connect-button");

          // If no buttons are found, return an error message.
          if (connectButtons.length === 0) {
            return { success: false, message: "No Connect buttons found!" };
          }

          // For each button, click it with a delay of 2 seconds between clicks.
          connectButtons.forEach((button, index) => {
            setTimeout(() => button.click(), 2000 * index); // 2000 ms = 2 seconds.
          });

          // Return a success message with the count of buttons clicked.
          return {
            success: true,
            message: `${connectButtons.length} connections sent!`,
          };
        },
      },
      (results) => {
        // Handle the result of the script execution.
        if (results && results[0]?.result) {
          // If the script ran successfully, send the result back.
          sendResponse(results[0].result);
        } else {
          // If something went wrong, send an error message.
          sendResponse({
            success: false,
            message: "Failed to execute script.",
          });
        }
      }
    );

    // Return true to tell Chrome this function will respond asynchronously.
    return true;
  }
});

