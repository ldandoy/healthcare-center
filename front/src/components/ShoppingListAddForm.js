import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"

import {useAddShoppingListMutation} from '../services/shoppingListApi'

const ShoppingListAddForm = () => {
  let navigate = useNavigate()

  const [article, setArticle] = useState({
    name: '',
    qty: 1,
    state: false
  })

  const [addShoppingList] = useAddShoppingListMutation()

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setArticle({...article, [name]:value});
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const res = await addShoppingList(article)
    
    setArticle({
      name: '',
      qty: 1,
      state: false
    })
    navigate("/shoppinglist", { replace: true });
  }

  return (
    <form className='form-bordered' onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">Quantité</label>
        <input
            id="qty"
            type="number"
            name="qty"
            placeholder="Entrez le nombre"
            value={article.qty}
            onChange={onChangeHandler}
            className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="name">Votre article</label>
        <input
            id="name"
            type="text"
            name="name"
            placeholder="Entrez le nom"
            value={article.name}
            onChange={onChangeHandler}
            className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="state">Acheté</label>
        <input
            id="state"
            type="checkbox"
            name="state"
            value={article.state}
            onChange={onChangeHandler}
        />
      </div>
      <div className="form-group">
          <button type="submit" className='btn btn-notice w-100'>Envoyer</button>
          <Link to="/shoppinglist">Liste des courses</Link>
      </div>
    </form>
  )
}

export default ShoppingListAddForm