import { jest } from "@jest/globals";
import FizzBuzz from "./FizzBuzz";

const log = jest.spyOn(console, "log").mockImplementation(() => {});
describe("FizzBuzz", () => {
  afterEach(() => log.mockReset());
  describe("Stage 1", () => {
    it("should iterate through numbers 1..100", () => {
      const start = 1;
      const limit = 100;
      FizzBuzz(start, limit);
      expect(log).toBeCalledTimes(100);
    });
    it("should print Fizz if the number is divisible by 3", () => {
      const start = 3;
      const limit = 3;
      FizzBuzz(start, limit);
      expect(log).toBeCalledTimes(1);
      expect(log).toBeCalledWith("Fizz");
    });
    it("should print Buzz if the number is divisible by 5", () => {
      const start = 5;
      const limit = 5;
      FizzBuzz(start, limit);
      expect(log).toBeCalledTimes(1);
      expect(log).toBeCalledWith("Buzz");
    });
    it("should print FizzBuzz if the number is divisible by 3 and 5", () => {
      const start = 15;
      const limit = 15;
      FizzBuzz(start, limit);
      expect(log).toBeCalledTimes(1);
      expect(log).toBeCalledWith("FizzBuzz");
    });
  });
  describe("Name of the group", () => {
    it("should also print Fizz if the number contains a 3", () => {
      const start = 13;
      const limit = 13;
      FizzBuzz(start, limit);
      expect(log).toBeCalledTimes(1);
      expect(log).toBeCalledWith("Fizz");
    });
    it("should also print Buzz if the number contains a 5", () => {
      const start = 25;
      const limit = 25;
      FizzBuzz(start, limit);
      expect(log).toBeCalledTimes(1);
      expect(log).toBeCalledWith("Buzz");
    });
    it("should also print FizzBuzz if the number contains both a 3 and a 5", () => {
      const start = 53;
      const limit = 53;
      FizzBuzz(start, limit);
      expect(log).toBeCalledTimes(1);
      expect(log).toBeCalledWith("FizzBuzz");
    });
  });
});
