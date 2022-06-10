import React, { useState } from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import { useMediaQuery } from 'react-responsive'
import { GiHamburgerMenu } from 'react-icons/gi'
import Sidebar from '../Sidebar'

const StyledHeader = styled.div`
    position: sticky;
    top: 0;
    margin: 0;
    background-color: #FFA4A4;
    height: 6vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Bungee', cursive;
    font-size: 1.5em;
    padding: .5em .5em;

    img {
        height: 100%;
    }
    div {
        display: flex;
        flex-wrap: nowrap;
        gap: 1em;
    }
    a {
        text-decoration: none;
        color: white;
        transition: .5s;
    }
    a:hover {
        text-shadow:
            0 0 7px #ffd342,
            0 0 42px #ffd342;
    }

    button {
        height: 100%;
        border: 0;
        background-color: inherit;
    }

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
    }
`

const Header = ({ sectionList }) => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 768px)'
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
      <>
        <StyledHeader>
        {isDesktop
          ? <>
                <img src="hackfools.png" />
                <div>{sectionList.map(({ label, ref }, ind) => <a href={ref} key={ind}>{label}</a>)}</div>
            </>
          : <>
                <button onClick={() => setIsMenuOpen(true)}>
                    <GiHamburgerMenu color='#ffd342' size={'80%'}/>
                </button>
                <img src="hackfools.png" />
        </>}
        </StyledHeader>
        {!isDesktop && isMenuOpen && <Sidebar sectionList={sectionList} onClose={() => setIsMenuOpen(false)} />}
      </>
  )
}

Header.propTypes = {
  sectionList: PropTypes.array
}

export default Header
