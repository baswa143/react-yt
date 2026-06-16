import React from 'react'

const App = () => {

const handleClink = (elem)=>{
  if(elem.target.value === 'hello'){
    console.log('dance')
  }
  else{
    console.log('bav bav dog')
  }
}

  return (
    <div onWheel={(elem)=>{
      handleClink(elem)
    }}>
      <div className="page"></div>
      <div className="page1"></div>
      <div className="page2"></div>
    </div>
  )
}

export default App
