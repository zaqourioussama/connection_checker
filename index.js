// Function to check network status
checkNetworkStatus = () => {
  if (navigator.onLine) {
    return true;
  } else {
    return false;
  }
}

// Event listener for online/offline events
window.addEventListener('online', checkNetworkStatus);
window.addEventListener('offline', checkNetworkStatus);

module.exports = { checkNetworkStatus };

