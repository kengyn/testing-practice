import calculator from "../script/calculator";

test("addition", () => {
  expect(calculator.add(1, 1)).toBe(2);
});
test("subtraction", () => {
  expect(calculator.sub(1, 1)).toBe(0);
});
test("multiplication", () => {
  expect(calculator.mul(1, 1)).toBe(1);
});
test("division", () => {
  expect(calculator.div(1, 1)).toBe(1);
});
