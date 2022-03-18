import React, { useState } from 'react'

import { PostAPI } from '../services/fetchData'

const WeightAddForm = () => {
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
  }

  return (
    <form onSubmit={handlerOnSubmit}>
      <input type="number" name="weight" value={form.weight} onChange={handlerOnChange} />
      <input type="date" name="day" value={form.day} onChange={handlerOnChange} />
      <input type="submit" value="Enregister" className='btn' />
    </form>
  )
}

export default WeightAddForm