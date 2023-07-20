// src/index.ts

// Example 1: Implicit Any
function add(x: any, y: any) {
  return x + y;
}


export function foo(): string {
  const result = add(5, "10");
  console.log(result);

  return "foo";
}