/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function handleRedirectToMsDocs(details: any): any {
    const url = new URL(details.url);
    const firstPath = url.pathname.split("/")[1];
    const normalizedPath = firstPath.replace(/\//g, "");
    console.log("url.pathname:"+ url.pathname + " firstpath: " + firstPath + " normalized: " + normalizedPath);
    if (normalizedPath.length != 5) {
        // ignore non country paths
        return {};
    }
    if (!(normalizedPath.startsWith("en-us") || normalizedPath.startsWith("en-gb"))) {
        console.log("Redirecting: " + normalizedPath);
        return { redirectUrl: "https://anadolu.edu.tr" };
    }
    return {};
}
