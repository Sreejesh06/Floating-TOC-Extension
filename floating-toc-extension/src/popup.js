document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-toc');
    
    toggleButton.addEventListener('click', async () => {
      try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        // First inject the content script
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content.js']
        });
        
        // Then send the message
        chrome.tabs.sendMessage(tab.id, { action: 'toggleTOC' });
      } catch (error) {
        console.error('Error:', error);
      }
    });
  });