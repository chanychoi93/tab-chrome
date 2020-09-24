'use strict';

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: '#3aa757' }, function () {
    console.log('The color is green.');
  });
});

chrome.tabs.onCreated.addListener(function (tab) {
  chrome.tabs.query({}, (tabs) => {
    console.log(tabs);
    if (tabs.length > 10) {
      // Tab filled with html/css/other functionality
      //   console.log('this is tabs at tabs length blabla', tabs[tabs.length - 1]);
      //   console.log('this is tab', tab);
      chrome.tabs.executeScript(tab.id, {
        file: './content.js',
      });
    }
  });
});
