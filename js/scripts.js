// BUSINESS LOGIC
function Pizza (size) {
  this.size = size;
  // this.crust = crust;
  // this.toppings = toppings;
  // this.sauce = sauce;
}

var size= ["small", "medium", "large", "xl"]
var pizza = [];
var allToppings = ["pepperoni", "sausage", "mushrooms"];

var order = new Pizza (size);

var chooseSize = prompt("What size would you like? (S/M/L/XL)?")
  if (chooseSize === "S") {
    order.size = size[0];
  }
  if (chooseSize === "M") {
    order.size = size[1];
  }
  if (chooseSize === "L") {
    order.size = size[2];
  }
  if (chooseSize === "XL") {
    order.size = size[3];
  }

// var cheese = new Pizza ("large", ["cheese"], 5.00);
// var pepperoni = new Pizza ("large", ["cheese", "pepperoni"], 6.00);
// var meats = new Pizza ("large", ["cheese", "pepperoni", "sausage", "bacon"], 8.00);
// var supreme = new Pizza ("large", ["cheese", "pepperoni", "sausage", "bacon", "green peppers", "mushrooms", "olives"], 8.50);
// var custom = new Pizza ("large", ["cheese"], 5.00);

Pizza.prototype.priceSet = function() {
  this.price = 7
  if (this.size === "medium") {
    this.price += 2;
  }
  if (this.size === "large") {
    this.size = size[2];
    this.price += 3.75;
  }
  if (this.size === "xl") {
    this.size = size[3];
    this.price += 5.25;
  }
  for (var i = 0; i <= allToppings.length; i++) {
    this.price += i * 2.00;
  }
    return "$" + this.price.toFixed(2)
  }





console.log(order.size);
console.log(order.priceSet());
console.log(allToppings.length);


// USER INTERFACE LOGIC
// $(document).ready(function() {
//   $("#pizzaForm").submit(function(event) {
//     event.preventDefault();
//     $("#review").empty();
//
//
//     var input = $("#toppings option:selected").val();
//     console.log(inputToppings)
//     if (input === "pepperoni") {
//         var inputSize = pepperoni.size
//         var inputToppings = pepperoni.toppings;
//         var inputPrice = pepperoni.priceSet();
//     } if (input === "meats") {
//         var inputSize = meats.size
//         var inputToppings = meats.toppings;
//         var inputPrice = meats.priceSet();
//     } if (input === "cheese") {
//         var inputSize = cheese.size
//         var inputToppings = cheese.toppings;
//         var inputPrice = cheese.priceSet();
//     } if (input === "supreme") {
//         var inputSize = supreme.size
//         var inputToppings = supreme.toppings;
//         var inputPrice = supreme.priceSet();
//
//     } if (input === "custom") {
//       var customToppings = []
//       $("input:checkbox[name=topping]:checked").each(function() {
//         var check = $(this).val();
//         $("#review").append("<li><span class='review'>" + check + "</span></li>")
//       });
//     }
//
//     var inputPizza = new Pizza(inputSize, inputToppings, inputPrice);
//
//     $("#review").append("<li><span class='review'>" + inputPizza.size + "</span></li>");
//     $("#review").append("<li><span class='review'>" + inputPizza.toppings + "</span></li>");
//     $("#review").append("<li><span class='review' id='price'>" + inputPizza.price + "</span></li>");
//
//   });
// });
