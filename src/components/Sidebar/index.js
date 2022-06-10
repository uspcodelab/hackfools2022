import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: .5em;

    background-color: #FFA4A4;
    height: 100%;
    min-width: 60%;
    padding: 1em .5em;

    font-family: 'Bungee', cursive;
    font-size: 2em;

    a {
        margin: .2em;
        text-decoration: none;
        color: #ffd342;
        display: flex;
        align-items: center;
        gap: .5em;
    }
`

const Overlay = styled.div`
    background-color: black;
    opacity: 0.5;
    height: 100%;
    width: 100%;
`

const Sidebar = ({ sectionList, onClose }) => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex'
    }}>
    <StyledSidebar>
        {sectionList.map(({ label, ref, icon }, ind) => (
            <a href={ref} key={ind}>{icon}{label}</a>
        ))}
    </StyledSidebar>
    <Overlay onClick={onClose}/>
    </div>
)

Sidebar.propTypes = {
  sectionList: PropTypes.array,
  onClose: PropTypes.func
}

export default Sidebar
