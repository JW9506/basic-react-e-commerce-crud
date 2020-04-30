import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { reducer as productReducer } from "./product"
import { reducer as userReducer } from "./user"

const reducer = combineReducers({
  products: productReducer,
  user: userReducer,
})

export const store = configureStore({ reducer })
