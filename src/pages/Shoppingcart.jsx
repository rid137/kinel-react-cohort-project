// ShoppingCart.jsx
// This component teaches: useState, arrays in state, conditional rendering,
// derived state, and passing functions as props

import { useState } from "react";

// 🛍️ Some sample products to add to the cart
const PRODUCTS = [
  { id: 1, name: "Apples",  price: 1.50 },
  { id: 2, name: "Bread",   price: 2.00 },
  { id: 3, name: "Milk",    price: 1.20 },
  { id: 4, name: "Cheese",  price: 3.50 },
];

function ShoppingCart() {
  // STATE 1: the list of items currently in the cart
  // We start with an empty array [] because the cart is empty at first
  const [items, setItems] = useState([]);
  console.log("items in the cart", items)

  // STATE 2: whether the cart drawer is open or closed
  // We start with false because the cart is hidden at first
  const [isOpen, setIsOpen] = useState(false);

  // ➕ ADD an item to the cart
  // We use the "prev =>" pattern so React always has the latest list
  const addItem = (newItem) => {
    setItems(prev => [...prev, newItem]);
    // [...prev, newItem] means: "keep everything that was already in the
    // array, THEN add newItem at the end"
  };

  // ❌ REMOVE an item from the cart by its id
  const removeItem = (id) => {
    setItems(prev =>
      // .filter() keeps only the items where the condition is TRUE
      // so any item whose id matches gets removed
      prev.filter(item => item.id !== id)
    );
  };

  // 🧮 DERIVED STATE — calculated from existing state, no useState needed
  // Every time `items` changes, React re-renders and recalculates this
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const itemCount  = items.length;


//   const [greeting, setGreeting] = useState("Good morning");

//   if (greeting === "Good morning") {
//     console.log("this is morning");
//   } else {
//     console.log("this is evening")
//   }

    // Ternary Operator
    // greeting === "Good morning" ? console.log("this is morning") : console.log("this is evening")    

  return (
    <div className="max-w-lg mx-auto mt-10 px-4 font-sans">
      <h1 className="text-2xl font-bold mb-6">My Shop</h1>

      {/* ── PRODUCT LIST ── */}
      <div className="flex flex-col gap-3 mb-8">
        {PRODUCTS.map(product => (
          <div
            key={product.id}
            className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3"
          >
            <span className="text-gray-700">
              {product.name} — ${product.price.toFixed(2)}
            </span>
            <button
              onClick={() => addItem({ ...product, cartId: Date.now() })}
              // ☝️ We use cartId (not product.id) so the same product can be
              // added multiple times — each one is unique in the cart
              className="px-4 py-1.5 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* ── CART TOGGLE BUTTON ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        // !isOpen flips the value: false → true, true → false
        className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
      >
        {/* We show different text depending on state ==> Ternary Operation */}
        {isOpen ? "Hide Cart" : `Show Cart (${itemCount})`}
      </button>

      {/* ── CART DRAWER ──
          This whole block only renders when isOpen is true.
          The pattern: {condition && <JSX />} is called "short-circuit rendering" */}
      {isOpen && (
        <div className="mt-4 border border-gray-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

          {/* Another conditional: show a message when the cart is empty */}
          {items.length === 0 ? (
            <p className="text-gray-400 text-sm">Your cart is empty. Add something!</p>
          ) : (
            <>
              {/* Loop over every item in the cart and show it */}
              <ul className="divide-y divide-gray-100">
                {items.map(item => (
                  <li
                    key={item.cartId}
                    // ☝️ key uses cartId so duplicates are handled correctly
                    className="flex items-center justify-between py-3"
                  >
                    <span className="text-gray-700">
                      {item.name} — ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item.cartId)}
                      className="text-red-400 hover:text-red-600 text-lg leading-none cursor-pointer transition-colors"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>

              {/* Total — derived from state, always up to date */}
              <p className="text-right font-bold mt-4 pt-3 border-t border-gray-100">
                Total: ${totalPrice.toFixed(2)}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;