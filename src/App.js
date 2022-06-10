import React from 'react'
import Header from './components/Header'
import { BsPeopleFill } from 'react-icons/bs'
import { IoIosPaper } from 'react-icons/io'

function App () {
  return (
    <>
      <Header sectionList={[{
        icon: <BsPeopleFill />,
        label: 'Evento',
        ref: '#hackfools'
      }, {
        label: 'Projetos',
        ref: '#projetos',
        icon: <IoIosPaper />
      }]}/>
      <div>HACKFOOLS</div>
      <div>PROJETOS</div>
      <div>GANHADORES</div>
      <div>CODELAB</div>
      <div>FOOTER</div>
    </>
  )
}

export default App
