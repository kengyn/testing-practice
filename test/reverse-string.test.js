import reverseString from "../script/reverse-string";

test("reverse one word", () => {
  expect(reverseString("finn")).toBe("nnif");
});

test("reverse sentence", () => {
  expect(reverseString("finn fart")).toBe("traf nnif");
});
