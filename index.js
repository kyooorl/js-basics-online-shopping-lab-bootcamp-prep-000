var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 101);
 var itemObj = {[item]: price};
 cart.push(itemObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var cartItems = [];
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
  } else if (cart.length === 2) {
  console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
  } else {
      for (var i = 0; i < cart.length-1; i++) {
        cartItems.push(`In your cart, you have ${Object.keys(cart[i])} at $${Object.values(cart[i])})`);
      }
}
}


function total() {
  var cartItemTotal = [];
  let i = 0;
  while (i < cart.length) {
    cartItemTotal += cart[i][Object.values[cart]];
  }
total();
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
