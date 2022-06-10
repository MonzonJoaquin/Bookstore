import { configureStore } from "@reduxjs/toolkit";

import { products, purchaseOrder, user } from "./Reducer";

export const Store = configureStore({
  reducer: {
    products,
    purchaseOrder,
    user
  }
})