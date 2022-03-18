import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getAPI } from './services/fetchData';
import { setAuth } from './features/authSlice'
import WeightAddForm from './components/WeightAddForm'
import WeightList from './components/WeightList'

const App = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    // To check if we are logged
    const getData = async () => {
      const res = await getAPI('/users/me');
      dispatch(setAuth({user: res.data}))
    }

    getData();
  }, []);


  return (
    <div className="App">
      { !auth.isAuth && <button
        onClick={() =>
          (window.location = 'http://localhost:1337/api/connect/google')
        }
      >
        Login via Google
      </button> }

      { auth.isAuth && <>
        <div className='mt-50'>
          <h1 className='txt-large'>Bienvenue { auth.user.username }</h1>
        </div>
        <div className='mt-30'>
          <div className='row'>
            <div className='col'>
              <WeightAddForm />
              <WeightList />
            </div>
            <div className='col'>
              
            </div>
          </div>
        </div>
      </>}
    </div>
  );
}

export default App;
