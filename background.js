chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log(details.url);
        return { redirectUrl: details.url.replace("tr-tr", "en-us") };
    },
    { urls: ["*://docs.microsoft.com/*"] },
    ["blocking"]);