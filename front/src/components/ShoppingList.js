import React from 'react'
import { Link } from "react-router-dom";

import { useGetShoppingListsQuery } from '../services/shoppingListApi'
import '../styles/box.scss'

const ShoppingList = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetShoppingListsQuery()
  
  return (<>
    <div>ShoppingList</div>
    { isLoading && <div>Loading...</div>}

    {! isLoading &&
      <div>
        { data && data.data && data.data.attributes.results.map(post => (
          <div className={`box High`} key={post.id}>
            { post.name }
          </div>
        )) }
      </div>
    }
    <Link to="/shoppinglistadd">Ajouter un article</Link>
  </>)
}

export default ShoppingList