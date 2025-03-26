
# 🌟 Floating TOC Extension

A beautiful, draggable table of contents that floats alongside any webpage, making navigation a breeze!

---

## ✨ Features

- 📋 **Automatic Content Detection:** Intelligently identifies your page's main content and headings
- 🖱️ **Fully Draggable:** Position the TOC anywhere on the page
- 🎨 **Sleek Design:** Clean, modern interface that complements any website
- 🌓 **Dark Mode Support:** Automatically adapts to light and dark websites
- ⌨️ **Keyboard Shortcuts:** Toggle with `Alt + T` for quick access
- 💾 **Position Memory:** Remembers where you placed it between visits

---

## 🚀 Getting Started

### **Installation**

1. Clone this repository:
    
    ```bash
    git clone <https://github.com/yourusername/floating-toc-extension.git>
    
    ```
    
2. Install dependencies:
    
    ```bash
    cd floating-toc-extension
    npm install
    
    ```
    
3. Build the extension:
    
    ```bash
    npm run build
    
    ```
    
4. Load the extension in Chrome:
    - Open `chrome://extensions/`
    - Enable "Developer mode"
    - Click "Load unpacked"
    - Select the `dist` folder from this project

---

## 🛠️ Development

### **Project Structure**

```
floating-toc-extension/
├── src/                     # Source code
│   ├── components/          # React components
│   │   ├── Toc/             # Main TOC component
│   │   └── TocItem/         # Individual TOC item component
│   ├── hooks/               # Custom React hooks
│   ├── background.js        # Extension background script
│   ├── content.js           # Content script injected into pages
│   ├── popup.js             # Popup script
│   └── styles.css           # Global styles
├── public/                   # Static assets
│   ├── icons/                # Extension icons
│   ├── manifest.json         # Extension manifest
│   └── popup.html            # Popup HTML
└── webpack.config.js         # Webpack configuration

```

---

### **Commands**

- **Build for production:**
    
    ```bash
    npm run build
    
    ```
    
- **Watch mode for development:**
    
    ```bash
    npm run watch
    
    ```
    

---

## 🤝 Contributing

We'd love your contributions! Here's how you can help:

1. 🍴 **Fork the repository**
2. 🌿 **Create your feature branch:**
    
    ```bash
    git checkout -b feature/amazing-feature
    
    ```
    
3. 💾 **Commit your changes:**
    
    ```bash
    git commit -m 'Add some amazing feature'
    
    ```
    
4. 📤 **Push to the branch:**
    
    ```bash
    git push origin feature/amazing-feature
    
    ```
    
5. 🔄 **Open a Pull Request**

---

### **Development Tips**

- The extension uses React for the UI components
- CSS is included directly in the components
- Webpack bundles everything together
- The content script injects the TOC into each webpage

---

## 📝 Known Issues

- TOC may not work correctly on highly dynamic websites
- Some sites with unusual heading structures might not be detected properly

---

## 📜 License

This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---

