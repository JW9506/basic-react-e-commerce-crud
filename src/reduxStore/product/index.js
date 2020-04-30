import { createSlice } from "@reduxjs/toolkit"

/*
  type Continent: "Africa" | "Europe" | "Asia" | "North America" | "South America" | "Australia"

  type Product = {
    name: string
    price: number
    images: string[]
    continent: Continent
  }
*/

const products = createSlice({
  name: "product",
  initialState: [
    { name: "USA", price: 200, images: [], continent: "North America" },
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { reducer } = products
export const { addProduct } = products.actions
