import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";

const dioBank = {
  login: false,
  email: "",
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
  it("Deve retornar o objeto no localStorage com a chave dioBank", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("Deve criar o objeto do localStorage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("Deve alterar o valor do objeto no localStorage", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
});
