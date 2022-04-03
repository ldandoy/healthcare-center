import React from 'react'
import { Link } from "react-router-dom"
import * as dayjs from 'dayjs'
import * as locale from 'dayjs/locale/fr';
import relativeTime from 'dayjs/plugin/relativeTime'
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

import { useGetTodosQuery, useDeleteTodoMutation } from '../services/todoApi'
import '../styles/box.scss'

const TodoList = () => {
  dayjs.extend(relativeTime)
  dayjs.locale('fr')

  const [deleteTodo] = useDeleteTodoMutation()
  const { data, error, isLoading, isSuccess, isError } = useGetTodosQuery()

  const onClickHandler = (todoId) => {
    deleteTodo(todoId)
  }

  return (<>
    <div>TodoList</div>
    
    { isLoading && <div>Loading...</div>}

    {! isLoading &&
      <div>
        { data && data.data && data.data.attributes.results.map(post => (
          <div className={`box ${post.priority}`} key={post.id}>
            <div className='txt-right txt-small'>
            <Link to={`/todolistedit/${post.id}`}><FaPencilAlt /></Link> &nbsp;
              <span className='txt-red-800' onClick={() => onClickHandler(post.id)}><FaTrashAlt /></span>
            </div>
            <div>{ post.content }</div>
            <div className='txt-right txt-small'>-- il y a {dayjs(post.createdAt).fromNow(true)}</div>
          </div>
        )) }
      </div>
    }
    
    <Link to="/todolistadd">Ajouter une tâche</Link>
  </>)
}

export default TodoList