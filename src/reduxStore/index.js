import { configureStore } from "@reduxjs/toolkit"

import { reducer as productReducer } from "./product"
import { reducer as userReducer } from "./user"
import { reducer as cartReducer } from "./cart"

const reducer = {
  products: productReducer,
  user: userReducer,
  cart: cartReducer,
}

export const store = configureStore({ reducer })
