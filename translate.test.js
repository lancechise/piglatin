const { translate } = require("./translate");

describe("translate function", () => {
  test("word that starts with a", () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with e", () => {
    const result = translate("else");
    expect(result).toBe("elseway");
  });
  test("word that starts with i", () => {
    const result = translate("inch");
    expect(result).toBe("inchway");
  });
  test("word that starts with o", () => {
    const result = translate("ocean");
    expect(result).toBe("oceanway");
  });
  test("word that starts with u", () => {
    const result = translate("uncle");
    expect(result).toBe("uncleway");
  });
  test("word starting with one consonant.", () => {
    const result = translate("james");
    expect(result).toBe("amesjay");
  });
  test("word starting with one consonant.", () => {
    const result = translate("mitch");
    expect(result).toBe("itchmay");
  });
  test("word starting with two consonants.", () => {
    const result = translate("llama");
    expect(result).toBe("amallay");
  });
  test("word starting with three consonants.", () => {
    const result = translate("school");
    expect(result).toBe("oolschay");
  });
  test("word starting with three consonants.", () => {
    const result = translate("School");
    expect(result).toBe("oolschay");
  });
  test("word starting with three consonants.", () => {
    const result = translate("ScHOoL");
    expect(result).toBe("oolschay");
  });
});
