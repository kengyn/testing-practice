import caesarCipher from "../script/caesar-cipher";

test("one word", () => {
  expect(caesarCipher("fart", 1)).toBe("gbsu");
});
test("sentence", () => {
  expect(caesarCipher("finn fart", 3)).toBe("ilqq iduw");
});
test("sentence w/ punctuation", () => {
  expect(caesarCipher("finn fart!!!!", 26)).toBe("finn fart!!!!");
});
