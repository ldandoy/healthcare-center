import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'

import './index.css';
import GoogleAuthCallback from './components/GoogleAuthCallback'
import ShoppingList from './components/ShoppingList'
import ShoppingListAddForm from './components/ShoppingListAddForm'
import TodoList from './components/TodoList'
import TodoAddForm from './components/TodoAddForm'
import TodoListEditForm from './components/TodoListEditForm'
import WeightList from './components/WeightList'
import WeightAddForm from './components/WeightAddForm'
import MealList from './components/MealList'
import MealAddForm from './components/MealAddForm'
import App from './App';
import Default from './layouts/Default'

import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default><App /></Default>} />
          <Route path="/auth/google/callback" element={<GoogleAuthCallback />} />
          <Route path="/shoppinglist" element={<Default><ShoppingList /></Default>} />
          <Route path="/shoppinglistadd" element={<Default><ShoppingListAddForm /></Default>} />
          <Route path="/todolist" element={<Default><TodoList /></Default>} />
          <Route path="/todolistadd" element={<Default><TodoAddForm /></Default>} />
          <Route path='/todolistedit/:todoId' element={<Default><TodoListEditForm /></Default>} />
          <Route path="/weightlist" element={<Default><WeightList /></Default>} />
          <Route path="/weightadd" element={<Default><WeightAddForm /></Default>} />
          <Route path="/meallist" element={<Default><MealList /></Default>} />
          <Route path="meallistadd/:day/:time" element={<Default><MealAddForm /></Default>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
