console.log("Hello from background")
chrome.tabs.onActivated.addListener(tab => {
	console.log(tab)
	// chrome.tabs.get(tab.tabId, info => {
	// 	if (/^https:\/\/www\.discogs/.test(info.url)) {
	// 		chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("injected foreground"))
	// 	}
	// })
})