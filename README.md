# QR-Code-Generation
published link :- [here](https://chromewebstore.google.com/detail/qr-code-generator/jipbelmhbkpjmhjlpngmlnncclfgpnhe)

## Index

1. [Description](#description)
2. [Introduction](#introduction)
3. [Project Structure](#project-structure)
4. [Technologies Used](#technologies-used)
5. [Functionalities](#functionalities)
6. [How to Install](#how-to-install)
7. [License](#license)
8. [Help](#help)

---

## Description

The **QR Code Generator Extension** allows users to quickly generate QR codes from any URL. Users can input the URL in a simple popup, and the extension generates a QR code that can be scanned using mobile devices. It is useful for sharing links or information quickly and conveniently.

---

## Introduction

This Chrome extension is a lightweight and intuitive tool designed to create QR codes from any given URL. With a minimalistic and responsive user interface, users can quickly enter the URL and generate a corresponding QR code. This extension is built using HTML, CSS, and JavaScript, and utilizes the [QRCode.js library](https://github.com/davidshimjs/qrcodejs) for generating QR codes.

---

## Project Structure

Here is the overall structure of the project:

```bash

/QR-Code-Generator
│
├── background.js
├── icon.png
├── manifest.json
├── popup.html
├── popup.js
└── qrcode.min.js

```



1. **background.js**: (Empty) Reserved for background functionality in the future.
2. **icon.png**: The icon displayed for the extension.
3. **manifest.json**: Metadata file that describes the extension.
4. **popup.html**: The popup window's user interface with an input field, button, and description.
5. **popup.js**: JavaScript logic to handle user input and QR code generation.
6. **qrcode.min.js**: The external library for generating QR codes.

---

## Technologies Used

The following technologies and tools were used in the development of the QR Code Generator Extension:

- **HTML5**: For structuring the popup interface.
- **CSS3**: For styling the extension's popup.
- **JavaScript**: For user interactions and logic.
- **QRCode.js**: An external library for generating QR codes in the browser.
- **Chrome Extensions API**: To create and manage the browser extension.
  
---

## Functionalities

1. **URL Input**: Users can enter any valid URL in the input field.
2. **QR Code Generation**: After clicking the "Generate QR Code" button, a QR code is dynamically generated and displayed.
3. **Aesthetic Popup**: A user-friendly popup window with responsive design, providing a clean and simple layout.
4. **Clear QR Code on Input Change**: If a new URL is entered, the previous QR code is cleared and a new one is generated.

---

## Output 

![image](https://github.com/user-attachments/assets/2837787e-a8e7-4e17-92d1-3e9b07b3c010)

---

## How to Install

Follow these steps to install and run the QR Code Generator Chrome Extension:

1. Clone the repository to your local machine or download the zip file.
2. Go to `chrome://extensions/` in your Chrome browser.
3. Enable **Developer Mode** by toggling the switch in the top-right corner.
4. Click on **Load unpacked** and select the extension file folder.
5. The extension will now be visible in your Chrome toolbar, and you can click the icon to open the popup and generate QR codes!

---
## LICENSE

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE.md](https://github.com/parulraut0110/QR-Code-Generation/blob/main/LICENSE.md) file for details.

---

## Privacy Policy

You can view the full privacy policy [here](https://github.com/parulraut0110/QR-Code-Generation/blob/main/LICENSE.md).

---

## Help
If you have any questions or need help, please email me at parulraut0110@gmail.com or reach out to me on GitHub at parulraut0110.


