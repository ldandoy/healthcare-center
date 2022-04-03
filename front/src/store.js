import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import authReducer from './features/authSlice'
import { todoApi } from './services/todoApi'
import { shoppingListApi } from './services/shoppingListApi'
import { weightApi } from './services/weightApi'
import { mealApi } from './services/mealApi'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [shoppingListApi.reducerPath]: shoppingListApi.reducer,
    [weightApi.reducerPath]: weightApi.reducer,
    [mealApi.reducerPath]: mealApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todoApi.middleware)
    .concat(shoppingListApi.middleware)
    .concat(weightApi.middleware)
    .concat(mealApi.middleware),
})

setupListeners(store.dispatch)