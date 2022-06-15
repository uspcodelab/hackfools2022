import React from 'react'
import { AboutDiv } from '../../Styled'

import codelab from '../../../images/codelab.png'
import instagram from '../../../images/instagram.png'
import facebook from '../../../images/facebook.png'
import linkedin from '../../../images/linkedin.png'
import youtube from '../../../images/youtube.png'

const About = () => (
    <AboutDiv
    id='codelab'
    className='section'>
        <img src={codelab} id="logo" />
        <div>
            <h1>USPCodeLab</h1>
            <p>Somos um grupo de extensão universitária que tem como objetivo estimular a inovação tecnológica na USP.</p>
            <p>Seja através de iniciativas de educação e compartilhamento de conhecimento ou do desenvolvimento e solução de problemas através de sistemas.</p>
            <p>Estamos em diversas redes sociais, onde você pode saber mais sobre nós, entrar em contato com a gente ou aprender mais sobre o desenvolvimento de software.</p>
            <div id="social">
                <a href="https://uclab.xyz/instagram" target="_blank" rel="noreferrer"><img src={instagram} /></a>
                <a href="https://uclab.xyz/facebook" target="_blank" rel="noreferrer"><img src={facebook} /></a>
                <a href="https://uclab.xyz/linkedin" target="_blank" rel="noreferrer"><img src={linkedin} /></a>
                <a href="https://uclab.xyz/youtube" target="_blank" rel="noreferrer"><img src={youtube} /></a>
            </div>
            <p>contado: uspcodelab@gmail.com</p>
            <p>Arte feita por <a href="https://www.linkedin.com/in/jessica-sato-8a1434238/" target="_blank" rel="noreferrer">Jéssica Sato</a></p>
        </div>
    </AboutDiv>
)

export default About
