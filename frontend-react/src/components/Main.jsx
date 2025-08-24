import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'

const Main = () => {
  return (
    <>
     
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock Prediction Portal</h1>
          <p className='text-light lead'>
            Consensus estimates from analysts on share price targets, future revenues, profits, cash flows, capex and more for 1000 companies. Screeners with 1000+ parameters, across financials, technicals, shareholding and more. Also create your own screeners and custom parameters.
          </p>
          <Button text="Login" class="btn-outline-info" />
        </div>
      </div>

      
    </>
  )
}

export default Main
