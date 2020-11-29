import handleRedirectToMsDocs from "../src/redirect-to-msdocs-en";

describe("normal cases", () => {
    test("redirects only non-English url", () => {
        expect(handleRedirectToMsDocs({ url: "https://docs.microsoft.com/tr-tr/bla-bla" }))
            .toStrictEqual({ redirectUrl: "https://docs.microsoft.com/en-us/bla-bla" });
    });

    test("does not redirect English url", () => {
        expect(handleRedirectToMsDocs({ url: "https://docs.microsoft.com/en-us/bla-bla" }))
            .toStrictEqual({});
    });
});

describe("some edge cases for urls", () => {
    test("url with no path", () => {
        expect(handleRedirectToMsDocs({ url: "https://docs.microsoft.com" }))
            .toStrictEqual({});
    });

    test("url with slash path", () => {
        expect(handleRedirectToMsDocs({ url: "https://docs.microsoft.com/" }))
            .toStrictEqual({});
    });

    test("url with language path only", () => {
        expect(handleRedirectToMsDocs({ url: "https://docs.microsoft.com/en-us" }))
            .toStrictEqual({});
    });
});
