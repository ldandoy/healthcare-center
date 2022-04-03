import React from 'react'
import { Link } from "react-router-dom"

import { useGetMealsQuery, useDeleteMealMutation } from '../services/mealApi'
import '../styles/box.scss'
import '../styles/meal.scss'

const MealList = () => {
  const [deleteMeal] = useDeleteMealMutation()
  const { data, error, isLoading, isSuccess, isError } = useGetMealsQuery()

  const onClickHandler = (mealId) => {
    deleteMeal(mealId)
  }
  
  return (<>
      
      <div className='mb-30'>Liste des repas</div>

      { isLoading && <div>Loading...</div>}

      {! isLoading && <div className='row meal'>
        <div className='col'>
          <div className='title'>Lundi</div>
          <div className='mb-30'>
            Matin

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'lundi' && meal.attributes.time == 'matin' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/lundi/matin">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Midi

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'lundi' && meal.attributes.time == 'midi' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/lundi/midi">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Soir

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'lundi' && meal.attributes.time == 'soir' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/lundi/soir">Ajouter un plat</Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='title'>Mardi</div>
          <div className='mb-30'>
            Matin

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'mardi' && meal.attributes.time == 'matin' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/mardi/matin">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Midi

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'mardi' && meal.attributes.time == 'midi' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/mardi/midi">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Soir

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'mardi' && meal.attributes.time == 'soir' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/mardi/soir">Ajouter un plat</Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='title'>Mercredi</div>
          <div className='mb-30'>
            Matin

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'mercredi' && meal.attributes.time == 'matin' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/mercredi/matin">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Midi

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'mercredi' && meal.attributes.time == 'midi' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/mercredi/midi">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Soir

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'mercredi' && meal.attributes.time == 'soir' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/mercredi/soir">Ajouter un plat</Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='title'>jeudi</div>
          <div className='mb-30'>
            Matin

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'jeudi' && meal.attributes.time == 'matin' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/jeudi/matin">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Midi

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'jeudi' && meal.attributes.time == 'midi' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/jeudi/midi">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Soir

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'jeudi' && meal.attributes.time == 'soir' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/jeudi/soir">Ajouter un plat</Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='title'>Vendredi</div>
          <div className='mb-30'>
            Matin

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'vendredi' && meal.attributes.time == 'matin' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/vendredi/matin">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Midi

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'vendredi' && meal.attributes.time == 'midi' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/vendredi/midi">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Soir

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'vendredi' && meal.attributes.time == 'soir' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/vendredi/soir">Ajouter un plat</Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='title'>Samedi</div>
          <div className='mb-30'>
            Matin

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'samedi' && meal.attributes.time == 'matin' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/samedi/matin">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Midi

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'samedi' && meal.attributes.time == 'midi' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/samedi/midi">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Soir

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'samedi' && meal.attributes.time == 'soir' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/samedi/soir">Ajouter un plat</Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='title'>Dimanche</div>
          <div className='mb-30'>
            Matin

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'dimanche' && meal.attributes.time == 'matin' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/dimanche/matin">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Midi

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'dimanche' && meal.attributes.time == 'midi' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/dimanche/midi">Ajouter un plat</Link>
            </div>
          </div>
          <div className='mb-30'>
            Soir

            { data && data.data && data.data.map(meal => (<>
              { meal.attributes.day == 'dimanche' && meal.attributes.time == 'soir' && <div className='box'>
                {meal.attributes.name}
              </div>}</>))
            }

            <div className='mt-10'>
              <Link to="/meallistadd/dimanche/soir">Ajouter un plat</Link>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default MealList