const pizzaToppings = [
  "pepperoni",
  "sausage",
  "mushrooms",
  "black olives",
  "onions"
];

function greetCustomer(toppings) {
  const toppingForLog = listToppings(toppings);

  console.log(
    `Welcome to House of Pizza! Our pizza toppings are: ${toppingForLog}.`
  );
}

function getPizzaOrder(size, crust, ...toppings) {
  for (let topping of toppings) {
    if (!pizzaToppings.includes(topping)) {
      console.log(
        `We don't have ${topping}. Please order again or you're not getting any toppings`
      );
      // ! I think I would want to do something else right here.
      // ! I settled for just ending execution of the function by returning an empty string.
      return "";
    }
  }

  let toppingForLog = listToppings(toppings);

  if (toppingForLog == "") {
    toppingForLog = "cheese";
    console.log(`One ${size} ${crust} crust ${toppingForLog} pizza coming up!`);
  } else {
    console.log(
      `One ${size} ${crust} crust pizza with ${toppingForLog} coming up!`
    );
  }

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
  const toppingsArray = pizzaObject.toppings;

  let toppingForLog = listToppings(toppingsArray);

  if (toppingForLog == "") {
    toppingForLog = "cheese";
    console.log(
      `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} crust ${toppingForLog} pizza. Enjoy!`
    );
  } else {
    console.log(
      `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} crust pizza with ${toppingForLog}. Enjoy!`
    );
  }

  return pizzaObject;
}

function listToppings(toppings) {
  let toppingsString = "";
  for (let i = 0; i < toppings.length; i++) {
    let topping = toppings[i];
    if (i < toppings.length - 1) {
      toppingsString += `${topping}, `;
    } else {
      toppingsString += `and ${topping}`;
    }
  }
  return toppingsString;
}

greetCustomer(pizzaToppings);

servePizza(
  preparePizza(
    getPizzaOrder("medium", "thin", "pepperoni", "mushrooms", "onions")
  )
);
