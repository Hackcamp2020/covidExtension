alert('Number of Covid Cases: 1')
chrome.runtime.onMessage.addListener(function (request) {
    const re = new RegExp('bear', 'gi')
    const matches = doucment.doucmentElement.innerHTML.match(re)
    document.doucmentElement.innerHTML.match(re)
})