import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"

import { PostAPI } from '../services/fetchData'

const WeightAddForm = () => {
  let navigate = useNavigate()

  const [form, setForm] = useState({
    weight: 1,
    day: Date.now()
  })

  const handlerOnChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]:value});
  }

  const handlerOnSubmit = async (e) => {
    e.preventDefault();

    const res = await PostAPI('/weights', form)

    setForm({
      weight: 1,
      day: Date.now()
    })

    navigate("/weightlist", { replace: true });
  }

  return (
    <form className="form-bordered" onSubmit={handlerOnSubmit}>
      <div className="form-group">
        <label htmlFor="" className="form-label">Votre poids</label>
        <input type="number" className="form-input" name="weight" value={form.weight} onChange={handlerOnChange} />
      </div>
      <div className="form-group">
        <label htmlFor="" className="form-label">Date de la pesé</label>
        <input type="date" className="form-input" name="day" value={form.day} onChange={handlerOnChange} />
      </div>
      <div className="form-group">
        <input type="submit" value="Enregister" className='btn btn-notice w-100' />
        <Link to="/weightlist">Liste des poids</Link>
      </div>
    </form>
  )
}

export default WeightAddForm