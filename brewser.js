// Include the Brewser library
<script type="text/javascript" src="/path/to/brewser.js"></script>

// Use the library to detect the device
Brewser.init();
console.log("Operating System:", Brewser.device.os);
console.log("Device Type:", Brewser.device.type);
console.log("Browser:", Brewser.browser.type);
