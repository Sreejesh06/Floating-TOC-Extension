// Required for Manifest V3, even if empty
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });