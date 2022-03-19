import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import authReducer from './features/authSlice'
import { todoApi } from './services/todoApi'
import { shoppingListApi } from './services/shoppingListApi'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [shoppingListApi.reducerPath]: shoppingListApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware).concat(shoppingListApi.middleware),
})

setupListeners(store.dispatch)