import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cartState') 
    ? JSON.parse(localStorage.getItem('cartState')) : {
    cart : [],
    totalAmount: 0,
    qty: 0,
    quantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action) {
        const product = action.payload;
  
        try {
          // Check if the product with the same id and size exists in the cart
          const exist = state.cart.find(
            (item) => item.id === product.id && item.size === product.size
          );
  
          if (exist) {
            // If the product exists, update the quantity and total amount
            exist.qty += 1;
            exist.quantity += 1;
            state.totalAmount += product.price;
          } else {
            // If the product does not exist, add a new entry to the cart
            state.cart.push({
              id: product.id,
              name: product.name,
              desc: product.desc,
              price: product.price,
              size: product.size,
              qty: 1,  // Add the product with a default quantity of 1
              totalAmount: product.price,
              img: product.img[0]
            });
            state.qty += 1;
            state.totalAmount += product.price;
          }
        } catch (error) {
          console.error("Error while adding the product: ", error);
        }
  
        // Store the updated cart in localStorage
        localStorage.setItem('cartState', JSON.stringify(state));
      },
      removeFromCart(state, action) {
        const product = action.payload;
        try {
            const exist = state.cart.find(
                (item) => item.id === product.id && item.size === product.size
            );
    
            if (exist) {
                // Check if the quantity is greater than 1
                if (exist.qty > 1) {
                    // Decrease quantity and total amount
                    exist.qty -= 1;
                    state.totalAmount -= product.price; // Decrement total amount
                } else {
                    // Remove product if qty is 1
                    state.totalAmount -= product.price; // Decrement total amount
                    state.cart = state.cart.filter(
                        (item) => !(item.id === product.id && item.size === product.size)
                    );
                }
    
                // Update total quantity of products
                state.qty = state.cart.reduce((total, item) => total + item.qty, 0);
                localStorage.setItem("cartState", JSON.stringify(state));
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    },
  });
  
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;