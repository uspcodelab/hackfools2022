import React from 'react'
import Header from './components/Header'
import sectionData from './sectionData'

function App () {
  return (
    <>
      <Header sectionList={sectionData}/>
      <div style={{ height: '100vh' }} id='hackfools'>HACKFOOLS</div>
      <div style={{ height: '100vh' }} id='projetos'>PROJETOS</div>
      <div style={{ height: '100vh' }} id='ganhadores'>GANHADORES</div>
      <div style={{ height: '100vh' }} id='codelab'>CODELAB</div>
      <div>FOOTER</div>
    </>
  )
}

export default App
