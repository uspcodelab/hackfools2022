import React from 'react'
import Header from './components/Header'
import About from './components/Sections/About'
import Event from './components/Sections/Event'
import Projects from './components/Sections/Projects'
import sectionData from './sectionData'

function App () {
  return (
    <>
      <Header sectionList={sectionData}/>
      <Event />
      <Projects />
      <About />
    </>
  )
}

export default App
