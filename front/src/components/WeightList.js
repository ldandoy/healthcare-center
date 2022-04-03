import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import * as dayjs from 'dayjs'
import * as locale from 'dayjs/locale/fr';
import { FaTrashAlt } from "react-icons/fa";

import { useGetWeightsQuery, useDeleteWeightMutation } from '../services/weightApi'
import '../styles/box.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeightList = () => {
  dayjs.locale('fr')
  const [dataChart, setDataChart] = useState([])
  const [haveData, setHaveData] = useState(false);
  const { data, error, isLoading, isSuccess, isError } = useGetWeightsQuery()
  const [deleteWeight] = useDeleteWeightMutation()

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  useEffect(() => {
    if (typeof data !== 'undefined') {
      const labels = []
      const datas = []
      
      data.data.attributes.results.forEach(element => {
        labels.push(element.day)
        datas.push(element.weight)
      });

      setDataChart({
        labels,
        datasets: [{
          label: 'poids',
          data: datas
        }]
      })
      setHaveData(true)
    }
  }, [data])

  const onClickHandler = (weightId) => {
    deleteWeight(weightId)
  }

  return (<>
    <div>WeightList</div>

    { isLoading && <div>Loading...</div>}

    { !isLoading && <>
      {haveData &&
        <Line data={dataChart} />
      }
      
      <div>
        { data && data.data && data.data.attributes.results.map(post => (
          <div className={`box ${post.priority}`} key={post.id}>
            <div className="flex flex flex-jc-space-between">
              <span>{ post.weight } <span className='txt-small'>le { dayjs(post.day).locale('fr').format('DD MMM YYYY') }</span></span>
              <span className='txt-red-800' onClick={() => onClickHandler(post.id)}><FaTrashAlt /></span>
            </div>
          </div>
        )) }
      </div>
    </>}

    <Link to="/weightadd">Ajouter un poids</Link>
  </>)
}

export default WeightList