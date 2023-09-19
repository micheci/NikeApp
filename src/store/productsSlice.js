
import { createSlice } from '@reduxjs/toolkit';
import products from '../data/products';

const initialState = {
  products: products,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      console.log(action)
      console.log(state)
       const productId=action.payload;
       console.log(productId)
       state.selectedProduct=state.products.find((p)=>p.id===productId)
    },
  },
});