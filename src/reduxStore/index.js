import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { reducer as productReducer } from "./product"

const reducer = combineReducers({
  products: productReducer,
})

export const store = configureStore({ reducer })
