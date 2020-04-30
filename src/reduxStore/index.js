import { configureStore } from "@reduxjs/toolkit"

import { reducer as globalReducer } from "./globalState"
import { reducer as productReducer } from "./product"
import { reducer as userReducer } from "./user"
import { reducer as cartReducer } from "./cart"

const reducer = {
  global: globalReducer,
  products: productReducer,
  user: userReducer,
  cart: cartReducer,
}

export const store = configureStore({ reducer })
