# LinkedIn Connect All Chrome Extension  

This Chrome Extension automates sending connection requests on LinkedIn's "Grow Your Network" page. The extension is built using the **wxt.dev framework** and **React**, providing a seamless user experience for connecting with multiple profiles.  

---

## Features  
- Adds a floating button labeled **"Connect with All"** to the LinkedIn "Grow Your Network" page.  
- Automatically clicks all visible "Connect" buttons on the page.  
- Introduces a randomized delay (1-3 seconds) between each connection request to avoid detection or account blocking.  
- Handles edge cases, such as no connectable profiles.  

---

## Technologies Used  
- **wxt.dev Framework**: Simplified Chrome Extension development.  
- **React**: Dynamic UI rendering for the floating button.  
- **JavaScript**: DOM manipulation and event handling for automation.  

---

## Installation  

### Prerequisites  
- **Node.js** installed on your system.  
- Basic knowledge of Chrome Extensions.  

### Steps  
1. Clone the repository:  
   ```bash  
   git clone <repository-url>  
   cd linkedin-extension  

Install dependencies:

npm install  

Build the extension:

    npm run build  

    Load the extension in Chrome:
        Open Chrome and go to chrome://extensions.
        Enable Developer Mode.
        Click Load Unpacked and select the dist folder.

Usage

    Open LinkedIn and navigate to:

    https://www.linkedin.com/mynetwork/grow/  

    Look for the floating "Connect with All" button on the bottom-right corner of the page.

    Click the button to send connection requests to all visible profiles.

    A delay of 1-3 seconds is applied between requests for safety.

Screenshots

(Add screenshots of the floating button and the extension in action here.)
Demo

    Video: Link to the demo video
    Packaged Extension: Download ZIP

Future Enhancements

    Add customization options for the delay duration.
    Include filters to select specific profiles for connection requests.
    Improve error handling for dynamic LinkedIn updates.




    License

This project is licensed under the MIT License.

Replace placeholders like `<repository-url>`, `#` for links, and "Add screenshots" with actual content as applicable. Let me know if you'd like further refinements!
