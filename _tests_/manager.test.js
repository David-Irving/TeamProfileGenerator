const Engineer = require("../lib/manager");
test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("ManagerName", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});
test("getRole() should return \"Manager\"", () => {
  const testValue = "manager";
  const e = new Engineer("Manager", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});
test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("ManagerName", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});