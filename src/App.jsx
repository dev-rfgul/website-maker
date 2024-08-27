import React from 'react'
import Sidebar from './Components/Sidebar'
import Canvas from './Components/Canvas'

const App = () => {
  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <Canvas />
      </div>
    </div>
  )
}

export default App