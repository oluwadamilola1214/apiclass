// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar'
// import Over from './Components/Over'
import Form from './Components/Form'
import Assignment from './Components/Assignment'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Form></Form>
      {/* <Over/> */}
      <Assignment/>
    </div>
  )
}

export default App