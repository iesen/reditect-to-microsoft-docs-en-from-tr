/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function handleRedirectToMsDocs(details: any): any {
    const url = new URL(details.url);
    const pathSplit = url.pathname.split("/");
    const firstPath = pathSplit[1];
    const normalizedPath = firstPath.replace(/\//g, "");
    console.log("url.pathname:"+ url.pathname + " firstpath: " + firstPath + " normalized: " + normalizedPath);
    if (normalizedPath.length != 5) {
        // ignore non country paths
        return {};
    }
    if (!(normalizedPath.startsWith("en-us") || normalizedPath.startsWith("en-gb"))) {
        console.log("url: ", url);
        const redirectTo = url.origin + "/en-us/" + pathSplit.slice(2, pathSplit.length).join("/");
        return { redirectUrl: redirectTo };
    }
    return {};
}
