/**
 * Greets a person with a customizable message
 * @param name - The name of the person to greet
 * @param greeting - Optional custom greeting (defaults to "Hello")
 * @returns A greeting message
 * @example
 * greet("World") // "Hello, World!"
 * greet("TypeScript", "Welcome") // "Welcome, TypeScript!"
 * greet("", "Hello") // "Hello, !"
 * greet("José María") // "Hello, José María!"
 * greet("Developer", "¡Hola") // "¡Hola, Developer!"
 */
export function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
