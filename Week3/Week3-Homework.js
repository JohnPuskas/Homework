const pizzaToppings = [
  "pepperoni",
  "sausage",
  "mushrooms",
  "black olives",
  "onions"
];

function greetCustomer(toppings) {
  let allToppingString = "";
  for (let topping of toppings) {
    allToppingString += `${topping}, `;
  }
  console.log(
    `Welcome to House of Pizza! Our pizza toppings are: ${allToppingString}`
  );
}

function getPizzaOrder(size, crust, ...toppings) {
  let toppingsString = "";
  for (let topping of toppings) {
    toppingsString += `${topping}, `;
  }

  console.log(
    `One ${size} ${crust} crust pizza with ${toppingsString}coming up!`
  );

  const pizzaDetails = [size, crust, toppings];
  // ? WHY does the below line print out 'object' as typeof? When I print the return value it is array!
  // ? It seems that the terminal always states the type of an array to be an object. Why is this?
  // ! console log below for Debugging ONLY
  // console.log(
  //   "this is the type of pizzaDetails variable: " + typeof pizzaDetails
  // );
  return pizzaDetails;
}

function preparePizza(pizzaOrder) {
  console.log("cooking pizza...");

  const pizzaObj = {
    size: "",
    crust: "",
    toppings: []
  };

  // Create keys array so I can use a loop below instead of repeatedly assigning a value to specific key names.
  const keys = Object.keys(pizzaObj);

  //I chose to use a a 'for loop' instead of 'for of' since I want to loop through both obj keys array and the pizzaOrder array.
  for (let i = 0; i < pizzaOrder.length; i++) {
    let key = keys[i];
    pizzaObj[key] = pizzaOrder[i];
  }
  // ! console log below for debugging only
  // console.log(pizzaObj);

  return pizzaObj;
}

function servePizza(pizzaObject) {
  let toppingsString = "";
  const toppingsArray = pizzaObject.toppings;
  for (let topping of toppingsArray) {
    toppingsString += `${topping}, `;
  }

  console.log(
    `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} crust pizza with ${toppingsString}Enjoy!`
  );
  return pizzaObject;
}

greetCustomer(pizzaToppings);

servePizza(
  preparePizza(
    getPizzaOrder("medium", "thin", "pepperoni", "mushroom", "onions")
  )
);
