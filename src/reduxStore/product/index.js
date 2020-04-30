import { createSlice, createAction } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"

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
    {
      id: uuid(),
      name: "USA",
      price: 200,
      images: [],
      continent: "North America",
    },
    {
      id: uuid(),
      name: "CHINA",
      price: 300,
      images: [],
      continent: "Asia",
    },
    {
      id: uuid(),
      name: "SPAIN",
      price: 400,
      images: [],
      continent: "Europe",
    },
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const addThisProductToCart = createAction("addThisProductToCart")

export const { reducer } = products
export const { addProduct } = products.actions
