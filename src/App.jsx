import React from 'react'
import Navbar from './components/Navbar'
import InvestContainer from './components/InvestContainer'

// first load point
const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className='my-3 mx-5'>
        <h3 className='mb-5 text-muted'> Investment Opportunities  </h3>
        {/* Container */}
        <InvestContainer />
      </div>

    </>
  )
}

export default App