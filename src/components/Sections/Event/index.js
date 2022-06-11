import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { EventDiv } from '../../Styled'

const Images = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })
  return (
    <div style={{ minWidth: '36vw', display: 'flex', alignItems: 'center', ...(isDesktop ? { flexDirection: 'column', marginTop: '20vh' } : { }) }}>
        <img src='/event.png' style={{ width: '35vw', ...(isDesktop ? { marginBottom: '-12vw' } : { marginRight: '-10vw' }) }} />
        <div style={{ display: 'flex', gap: '8vw', flexWrap: 'wrap', justifyContent: 'center', flexDirection: isDesktop ? 'row' : 'column', height: '36vw' }}>
            <img src='/photo3.jpg' style={{ width: '14vw', height: '14vw', borderRadius: '100%' }} />
            <img src='/photo2.jpg' style={{ width: '14vw', height: '14vw', borderRadius: '100%' }} />
            <img src='/photo1.jpg' style={{ width: '14vw', height: '14vw', borderRadius: '100%', ...(isDesktop ? { marginTop: '-24vw' } : { marginLeft: '-18vw' }) }} />
        </div>
   </div>
  )
}

const Event = () => (
    <EventDiv
        id='hackfools'
        className='section'
        >
        <Images />
        <div>
            <p>O Hackfools é um Hackathon anual organizado pelo <a href='#codelab'>USPCodeLab</a> para os ingressantes da USP, com o intuíto de ser uma maneira descontraída de introduzir os participantes ao caminho sem volta dos Hackathons.</p>
            <p>Em 2022, o evento ocorreu no dia 04 de junho, no IME - USP, com direito a pré evento no dia anterior oferecido pela <a href='https://blog.elo7.dev/' target='_blank' rel="noreferrer">Elo7</a>.</p>
            <p>Mais de 70 alunos se juntaram para programar das 10 da manhã até as 8 da noite, com um objetivo em comum: </p>
            <p>Produzir o <q>melhor</q> serviço de pizzaria.</p>
            <p>O resultado foi muita programação, networking, aprendizado e comida.</p>
        </div>
    </EventDiv>
)

export default Event
