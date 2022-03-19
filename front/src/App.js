import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getAPI } from './services/fetchData';
import { setAuth } from './features/authSlice'
import WeightAddForm from './components/WeightAddForm'
import WeightList from './components/WeightList'
import TodoAddForm from './components/TodoAddForm'
import TodoList from './components/TodoList'
import ShoppingList from './components/ShoppingList'

const App = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
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
          <div className='row row-half'>
            <div className='col col-half'>
              <div>
                <TodoList />
              </div>
            </div>
            <div className='col col-half'>
              <div>
                <ShoppingList />
              </div>
              <div className='mt-20'>
                <WeightList />
              </div>
            </div>
          </div>
        </div>
      </>}
    </div>
  );
}

export default App;
