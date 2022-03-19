import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import {setAuth} from '../features/authSlice'

function GoogleAuthCallback() {
  const location = useLocation()
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (!location) {
      return ;
    }
    
    const { search } = location
    axios({
      method: 'GET',
      url: `http://localhost:1337/api/auth/google/callback${search}`,
    })
      .then((res) => {
        localStorage.setItem('jwt', res.data.jwt);
        dispatch(setAuth({user: res.data.user}))
        navigate('/');
      })
  }, [location]);

  return (
    <div></div>
  )
}

export default GoogleAuthCallback