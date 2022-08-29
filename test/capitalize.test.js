import capitalize from "../script/capitalize";

test("capitlize one word", () => {
  expect(capitalize("deez")).toBe("Deez");
});
test("capitlize all uppercase words", () => {
  expect(capitalize("jOE MAMA")).toBe("Joe mama");
});
test("error if not string", () => {
  expect(capitalize(12)).toBe("bru dat not word");
});
