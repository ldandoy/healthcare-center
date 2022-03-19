import React from 'react'
import { Link } from "react-router-dom"

import { useGetTodosQuery } from '../services/todoApi'
import '../styles/box.scss'

const TodoList = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetTodosQuery()

  return (<>
    <div>TodoList</div>
    
    { isLoading && <div>Loading...</div>}

    {! isLoading &&
      <div>
        { data && data.data && data.data.attributes.results.map(post => (
          <div className={`box ${post.priority}`} key={post.id}>
            { post.content }
          </div>
        )) }
      </div>
    }
    <Link to="/todolistadd">Ajouter une tâche</Link>
  </>)
}

export default TodoList