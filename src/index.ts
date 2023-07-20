// src/index.ts

function foo1(radius: number): number {
  const PI = 3.14;
  return PI * radius * radius;
}

function foo2(itemPrice: number, quantity: number): number {
  const discount = 0.1;
  const subtotal = itemPrice * quantity;
  const discountedPrice = subtotal - subtotal * discount;
  return discountedPrice;
}

function foo3(itemPrice: number, quantity: number): number {
  const discount = 0.1;
  const taxRate = 0.08;
  const subtotal = itemPrice * quantity;
  const discountedPrice = subtotal - subtotal * discount;
  const totalPriceWithTax = discountedPrice + discountedPrice * taxRate;
  return totalPriceWithTax;
}


export function foo(): string {
  console.log(foo1(180));
  console.log(foo2(100, 1));
  console.log(foo3(100, 3));

  return "foo";
}