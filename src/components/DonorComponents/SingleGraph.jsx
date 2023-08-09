import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const SingleGraph = ({ type, chartData }) => {
  const [timePeriod, setTimePeriod] = useState('week')
  const week = [
    { x: new Date('2023-08-01T00:00:00').getTime(), y: 100 },
    { x: new Date('2023-08-02T00:00:00').getTime(), y: 120 },
    // ... more data points for the week
  ]
  const month = [
    { x: new Date('2023-08-01T00:00:00').getTime(), y: 1000 },
    { x: new Date('2023-08-02T00:00:00').getTime(), y: 1100 },
    // ... more data points for the month
  ]
  const year = [
    { x: new Date('2023-01-01T00:00:00').getTime(), y: 12000 },
    { x: new Date('2023-02-01T00:00:00').getTime(), y: 12500 },
    // ... more data points for the year
  ]
  if (!(week && month && year)) {
    return <h1>Loading......</h1>
  }

  const determineTimeFormat = () => {
    switch (timePeriod) {
      case 'week':
        return week
      case 'month':
        return month
      case 'year':
        return year
      default:
        return week
    }
  }

  const options = {
    title: {
      text: `${type === 'votes' ? 'Votes' : 'Donations'} Over Time`,
      align: 'center',
      style: {
        fontSize: '24px',
      },
    },
    stroke: {
  curve: 'smooth',
    },
    chart: {
      id: `${type}-chart`,
      animation: {
        speed: 1300,
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeUTC: false,
      },
      tooltip: {
        x: {
          format: 'MMM dd HH:mm',
        },
      },
    },
  }

  const series = [
    {
      name: type === 'votes' ? 'Votes' : 'Donations',
      data: determineTimeFormat(),
    },
  ]

  return (
    <div className='col-md-6 p-4'>
     
      <Chart options={options} series={series} type='line' height={400} />
      <div className='ms-3 text-center'>
        <button
          className={`btn mx-2 ${
            timePeriod === 'week' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setTimePeriod('week')}
        >
          Week
        </button>
        <button
          className={`btn mx-2 ${
            timePeriod === 'month' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setTimePeriod('month')}
        >
          Month
        </button>
        <button
          className={`btn mx-2 ${
            timePeriod === 'year' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setTimePeriod('year')}
        >
          Year
        </button>
      </div>
    </div>
  )
}

export default SingleGraph
