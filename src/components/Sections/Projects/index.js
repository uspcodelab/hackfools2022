import React from 'react'
import { ProjectsDiv } from '../../Styled'
import projectsData from './projectsData'
import { FaTrophy } from 'react-icons/fa'

const Projects = () => (
    <ProjectsDiv
    id='projetos'
    className='section'>
        <h1>Projetos</h1>
        <ul>
            {projectsData.map(({ name, team, participants, link, winner }, ind) => (
                <li key={ind} title={participants}><a href={link} target='_blank' rel="noreferrer">{!!winner && <FaTrophy title={winner} />} {name}</a>, do time {team}</li>
            ))}
        </ul>
    </ProjectsDiv>
)

export default Projects
