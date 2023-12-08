import { formValuesSchema } from "../LoginFormInputs";

// Jest unit test
test("validates correct data", () => {
  const data = { username: "john_doe", password: "secure_password" };
  const result = formValuesSchema.safeParse(data);
  expect(result.success).toBe(true);
});

test("throws error for incorrect data", () => {
  const data = { username: "", password: "weak" };
  const result = formValuesSchema.safeParse(data);
  expect(result.success).toBe(false);
});
