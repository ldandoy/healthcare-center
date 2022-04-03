import React from 'react'
import { Link } from "react-router-dom"
import { FaTrashAlt } from "react-icons/fa"

import { useGetShoppingListsQuery, useDeleteShoppingListMutation } from '../services/shoppingListApi'
import '../styles/box.scss'

const ShoppingList = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetShoppingListsQuery()
  const [deleteShoppingList] = useDeleteShoppingListMutation()

  const onClickHandler = (weightId) => {
    deleteShoppingList(weightId)
  }

  return (<>
    <div>ShoppingList</div>
    { isLoading && <div>Loading...</div>}

    {! isLoading &&
      <div>
        { data && data.data && data.data.attributes.results.map(post => (
          <div className={`box High`} key={post.id}>
            <div className="flex flex flex-jc-space-between">
              <span>{post.qty} { post.name }</span>
              <span className='txt-red-800' onClick={() => onClickHandler(post.id)}><FaTrashAlt /></span>
            </div>
          </div>
        )) }
      </div>
    }
    <Link to="/shoppinglistadd">Ajouter un article</Link>
  </>)
}

export default ShoppingList