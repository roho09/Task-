chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "triggerConnect") {
    chrome.scripting.executeScript(
      {
        target: { tabId: sender.tab.id },
        func: () => {
          const connectButtons = document.querySelectorAll(".connect-button");
          if (connectButtons.length === 0) {
            return { success: false, message: "No Connect buttons found!" };
          }

          connectButtons.forEach((button, index) => {
            setTimeout(() => button.click(), 2000 * index); // Delay for safety
          });

          return {
            success: true,
            message: `${connectButtons.length} connections sent!`,
          };
        },
      },
      (results) => {
        if (results && results[0]?.result) {
          sendResponse(results[0].result);
        } else {
          sendResponse({
            success: false,
            message: "Failed to execute script.",
          });
        }
      }
    );
    return true; // Keeps the messaging channel open for async response
  }
});
