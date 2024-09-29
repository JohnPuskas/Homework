let pizzaPlace = "John's Pizza";
let numberOfToppings = 25;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log(
  `${pizzaPlace} is home of the MOST toppings (${numberOfToppings}!!) at the lowest price.`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

//Bonus Challenge:
for (let i = 1; i <= numberOfToppings; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
