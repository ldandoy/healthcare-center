import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"

import { useAddTodoMutation } from '../services/todoApi'

const TodoAddForm = () => {
    const [todo, setTodo] = useState({
        content: '',
        done: false
    })
    const [addTodo] = useAddTodoMutation()

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        setTodo({...todo, [name]:value});
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const res = await addTodo(todo)
        
        setTodo({
            content: '',
            done: false
        })
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

export default TodoAddForm