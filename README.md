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
   cd linkedin-connect
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


Screenshots----
BEFORE EXTENSION
![before extension](https://github.com/user-attachments/assets/a592fabe-0e07-4361-a8e7-acbd11588256)

AFTER EXTENSION----- 
![Task done Succsessfully!](https://github.com/user-attachments/assets/ae7197eb-2ef0-47f5-9693-49f0b59d3cc6)


Demo

    Video: Link to the demo video - https://go.screenpal.com/watch/cZlO1dneQWU
    Packaged Extension: Download ZIP -  https://drive.google.com/file/d/13lI9yw7GS-_y5SlcLvAduGQvnRUOo8kz/view?usp=sharing


    Future Enhancements

    Add customization options for the delay duration.
    Include filters to select specific profiles for connection requests.
    Improve error handling for dynamic LinkedIn updates.

License

This project is licensed under the MIT License.

Ensure that the images (`before-extension.png` and `task-done-successfully.png`) are saved in the same directory as the `README.md` file. Let me know if you need further adjustments!
