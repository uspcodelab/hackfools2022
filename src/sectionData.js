import React from 'react'

import { BsPeopleFill } from 'react-icons/bs'
import { IoIosPaper } from 'react-icons/io'
import { FaTrophy } from 'react-icons/fa'
import { GoBeaker } from 'react-icons/go'

const sectionData = [{
  icon: <BsPeopleFill />,
  label: 'Evento',
  ref: '#hackfools'
}, {
  label: 'Projetos',
  ref: '#projetos',
  icon: <IoIosPaper />
}, {
  label: 'Ganhadores',
  ref: '#ganhadores',
  icon: <FaTrophy />
}, {
  label: 'Quem somos',
  ref: '#codelab',
  icon: <GoBeaker />
}]

export default sectionData
