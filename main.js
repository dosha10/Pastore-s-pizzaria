const pizzaForm = document.getElementById("pizzaForm");
const sumOrder = document.getElementById("sumOrder");
const pizzaList = document.getElementById("List");
const orderTotal = document.getElementById("total")

function Pizza(flavor, size, crust, toppings, number) {
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
    this.total = function() {
        let pizzaPrice = [];
        pizzaPrice.push(this.price);
        pizzaPrice.reduce((a, b) => a + b, 0);
    };
    this.price = function() {
        let smallPizza = 1000;
        let mediumPizza = 1200;
        let largePizza = 1400;
        if (this.size == "small" && this.toppings != 0) {
            return smallPizza + 150;
        }
        if (this.size == "medium" && this.toppings != 0) {
            return mediumPizza + 150;
        }
        if (this.size == "large" && this.toppings != 0) {
            return largePizza + 150;
        }
        if (this.size == "small") {
            return smallPizza;
        }
        if (this.size == "medium") {
            return mediumPizza;
        }
        if (this.size == "large") {
            return largePizza;
        }
    };
}

let prices = [];
pizzaForm.addEventListener("submit", function(e) {
    e.preventDefault()
    let size = document.getElementById("pizzaSize").value;
    let crust = document.getElementById("pizzaCrust").value;
    let toppings = document.getElementById("pizzaToppings").value;
    let number = document.getElementById("pizzaNumber").value;
    let flavor = document.getElementById("pizzaFlavor").value;
    let pizza = new Pizza(flavor, size, crust, toppings, number);

    prices.push(pizza.price() * number);
    let totalPrice = prices.reduce((a, b) => a + b);
    const li = document.createElement("li");
    li.innerHTML = `${pizza.flavor}--${pizza.size}--${pizza.toppings}--${pizza.crust}`
    pizzaList.appendChild(li);
    orderTotal.innerHTML = totalPrice;
});