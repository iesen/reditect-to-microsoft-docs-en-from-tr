/* eslint-disable @typescript-eslint/no-explicit-any */
import handleRedirectToMsDocs from "./redirect-to-msdocs-en";

declare const chrome: any;

chrome.webRequest.onBeforeRequest.addListener((details: any) => {
    return handleRedirectToMsDocs(details);
}, { urls: ["*://docs.microsoft.com/*"] }, ["blocking"]
);
