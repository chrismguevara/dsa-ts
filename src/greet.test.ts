import { test, expect, describe } from "bun:test";
import { greet } from "./greet";

describe("greet function", () => {
  test("should greet with default greeting", () => {
    const result = greet("World");
    expect(result).toBe("Hello, World!");
  });

  test("should greet with custom greeting", () => {
    const result = greet("TypeScript", "Welcome");
    expect(result).toBe("Welcome, TypeScript!");
  });

  test("should handle empty name", () => {
    const result = greet("");
    expect(result).toBe("Hello, !");
  });

  test("should handle special characters in name", () => {
    const result = greet("José María");
    expect(result).toBe("Hello, José María!");
  });

  test("should handle custom greeting with special characters", () => {
    const result = greet("Developer", "¡Hola");
    expect(result).toBe("¡Hola, Developer!");
  });
});
