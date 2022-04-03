import React, {useEffect, useState} from 'react'
import { useNavigate, Link, useParams } from "react-router-dom"

import {useGetTodoQuery, useUpdateTodoMutation} from '../services/todoApi'

const TodoListEditForm = () => {
  let params = useParams()
  let navigate = useNavigate()
  const { todoId } = params

  const { data, error, isFetching, isLoading } = useGetTodoQuery(todoId)
  
  const [todo, setTodo] = useState({
    content: '',
    done: false
  })

  const [updateTodo] = useUpdateTodoMutation()

  useEffect(() => {
    if (data) {
      setTodo({...data.data.attributes})
    }
  }, [data])

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setTodo({...todo, [name]:value});
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log(todoId, todo)
    const res = await updateTodo({todoId, todo})
    navigate("/todolist", { replace: true });
  }

  return (
    <form className='form-bordered' onSubmit={onSubmitHandler}>
        <div className="form-group">
            <label className="form-label" htmlFor="title">Votre tâche</label>
            <input
                id="content"
                type="text"
                name="content"
                placeholder="Entrez votre tâche"
                value={todo.content}
                onChange={onChangeHandler}
                className="form-input"
            />
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="content">Etat</label>
            <input
                id="done"
                type="checkbox"
                name="done"
                value={todo.done}
                onChange={onChangeHandler}
            />
        </div>
        <div className="form-group">
            <button type="submit" className='btn btn-notice w-100'>Envoyer</button>
            <Link to="/todolist">Liste des tâches</Link>
        </div>
    </form>
  )
}

export default TodoListEditForm