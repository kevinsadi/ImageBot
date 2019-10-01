# ImageBot
Replaces images on webpages with whatever images the user wants and also makes cool sounds.

## Setup
---
### **Install dependencies**
```
npm install
```

### **Install browserify**
```
npm install -g browserify
```

### **Use browserify to convert Node scripts to browser scripts**
```
browserify [nodeScriptName] -o [broswerScriptName]
```

### **Reigster new file with the manifest.json**
```json
...
"js": [..., "[path/to/browserScript]"]
...
```
