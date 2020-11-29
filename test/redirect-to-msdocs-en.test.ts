import handleRedirectToMsDocs from "../src/redirect-to-msdocs-en";

test("works only on non-English urls", () => {
    expect(handleRedirectToMsDocs({ url: "https://docs.microsoft.com/tr-TR/bla-bla" }))
        .toBe({ needToChange: false });
});
