


// import React, { useState } from 'react';


// function Product({ id, name, price, addToCart }) {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>Price: ${price}</p>
//       <button onClick={() => addToCart({ id, name, price })}>
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// function Cart({ items }) {
//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item.name} - ${item.price}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   return (
//     <div>
//       <h1>Online Store</h1>
//       <div style={{ display: 'flex' }}>
//         <div style={{ flex: 1 }}>
//           <h2>Products</h2>
//           <Product id={1} name="Product 1" price={10} addToCart={addToCart} />
//           <Product id={2} name="Product 2" price={15} addToCart={addToCart} />
//           <Product id={3} name="Product 3" price={20} addToCart={addToCart} />
//         </div>
//         <div style={{ flex: 1 }}>
//           <Cart items={cartItems} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
