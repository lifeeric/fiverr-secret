console.log('This is the background page.');
console.log('Put the background scripts here.');

//// background.js ////
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['contentScript.bundle.js'],
  });
});
