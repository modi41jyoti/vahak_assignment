
import React from 'react'
import ButtonAppBar from './component/nav-bar/nav-bar.container'
import Card from './component/common/card/card.container'
import Form from './component/form/form.container'
import './App.scss'

function App() {

  return (
    <div >
      <ButtonAppBar />
      <h2 className='oldCar'>
        Old Car Available
      </h2>
      <p className='underBar'></p>
      <div className='card'>
        <Card />
      </div>
      <div className='form'>
        <Form />
      </div>
    </div>
  );
}

export default App;
