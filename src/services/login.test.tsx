import { login } from "./login";

describe("login", () => {
  const mockEmail = "armandojr.ara@gmail.com";
  const mockPassword = "123456";

  it("Deve exibir um alert com boas vindas caso o e-mail seja válido", async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toBe("success");
  });

  it("Deve exibir um erro caso o email seja inválido", async () => {
    const response = await login("email@invalido.com", "123456");
    expect(response).toBe("incorrectEmail");
  });

  it("Deve exibir um erro caso a senha seja inválido", async () => {
    const response = await login("armandojr.ara@gmail.com", "123454322343426");
    expect(response).toBe("incorrectPassword");
  });
});
