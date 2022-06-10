import React from 'react'
import Header from './components/Header'
import sectionData from './sectionData'

function App () {
  return (
    <>
      <Header sectionList={sectionData}/>
      <div className='section' id='hackfools'>HACKFOOLS</div>
      <div className='section' id='projetos'>PROJETOS</div>
      <div className='section' id='ganhadores'>GANHADORES</div>
      <div className='section' id='codelab'>CODELAB</div>
      <div>FOOTER</div>
    </>
  )
}

export default App
