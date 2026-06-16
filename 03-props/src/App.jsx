import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card  user="Baswaraj Umate" age={25} img="https://images.unsplash.com/photo-1778244305115-4dd2bf7c8e86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card  user="Sandesh Rodge" age={24} img="https://images.unsplash.com/photo-1778875774934-8d301a9b3ac0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
    </div>
  )
}

export default App
