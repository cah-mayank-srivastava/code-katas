import createDeepCopy from "./DeepCopy";

describe.skip("Deep Copy Recursive", () => {
  it("should be able to create a deep copy", () => {
    
    let original = [
      "hello world",
      24,
      {
        date: new Date(),
        location: {
          city: "tampa",
        },
      },
    ];
    
    let deepCopied = createDeepCopy(original);
    
    deepCopied[2].location.city = "orlando"
    expect(original[2].location.city).toBe("tampa")
    expect(deepCopied[2].location.city).toBe("orlando")
  });
});
