import React, { useState } from 'react'
import { useNavigate, Link, useParams } from "react-router-dom"

import { useAddMealMutation } from '../services/mealApi'

const MealAddForm = () => {
  let params = useParams()
  let navigate = useNavigate()
  const { day, time } = params

  const [form, setForm] = useState({
    name: '',
    time: time,
    day: day
  })
  const [addMeal] = useAddMealMutation()

  const onChangeHandler = (e) => {
    const { name, value } = e.target

    setForm({...form, [name]:value})
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    const res = await addMeal(form)
    
    navigate("/meallist", { replace: true })
  }

  return (
    <form className="form-bordered" onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label htmlFor="" className="form-label">Nom du plat</label>
        <input type="text" className="form-input" name="name" value={form.name} onChange={onChangeHandler} />
      </div>
      <div className="form-group">
        <label htmlFor="" className="form-label">Jour de la semaine</label>
        <select className='form-select' name="day" value={form.day} onChange={onChangeHandler}>
          <option value="lundi">Lundi</option>
          <option value="mardi">Mardi</option>
          <option value="mercredi">Mercredi</option>
          <option value="jeudi">Jeudi</option>
          <option value="vendredi">Vendredi</option>
          <option value="samedi">Samedi</option>
          <option value="dimanche">Dimanche</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="" className="form-label">Repas</label>
        <select className='form-select' name="day" value={form.time} onChange={onChangeHandler}>
          <option value="matin">Matin</option>
          <option value="midi">Midi</option>
          <option value="soir">Soir</option>
        </select>
      </div>
      <div className="form-group">
        <input type="submit" value="Enregister" className='btn btn-notice w-100' />
        <Link to="/meallist">Liste des repas</Link>
      </div>
    </form>
  )
}

export default MealAddForm