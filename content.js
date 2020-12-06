alert('Number of Covid Cases: 1')
chrome.runtime.onMessage.addListener(function (request) {
    const re = new RegExp('bear', 'gi')
    const matches = document.documentElement.innerHTML.match(re)
    document.documentElement.innerHTML.match(re)
})
