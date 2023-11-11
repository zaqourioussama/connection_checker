# Network Status Check

**Overview:**

`connection_checker` is a lightweight JavaScript package designed to simplify the process of checking whether a browser is currently online or offline. It provides a single function, `checkNetworkStatus()`, that returns `true` if the browser is online and `false` if it's offline.

**Features:**

- **Easy integration:** Simply install the package using npm, import the `checkNetworkStatus` function, and start using it in your code.
  
- **Event handling:** The package includes event listeners for the browser's online and offline events, allowing you to respond dynamically to changes in network status.

**Usage Example:**

```javascript
const { checkNetworkStatus } = require('connection_checker');

// Function to handle online/offline events
function handleNetworkStatus() {
  if (checkNetworkStatus()) {
    console.log('Online');
    // Do something when online
  } else {
    console.log('Offline');
    // Do something when offline
  }
}

// Set up event listeners for online/offline events
window.addEventListener('online', handleNetworkStatus);
window.addEventListener('offline', handleNetworkStatus);

// Initial check when the application starts
handleNetworkStatus();
