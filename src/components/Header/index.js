import React, { useState } from 'react'

import PropTypes from 'prop-types'

import { useMediaQuery } from 'react-responsive'
import { GiHamburgerMenu } from 'react-icons/gi'

import Sidebar from '../Sidebar'
import { StyledHeader } from '../Styled'
import hackfools from '../../images/hackfools.png'

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
                <img src={hackfools} />
                <div>{sectionList.map(({ label, ref }, ind) => <a href={ref} key={ind}>{label}</a>)}</div>
            </>
          : <>
                <button onClick={() => setIsMenuOpen(true)}>
                    <GiHamburgerMenu color='#ffd342' size={'80%'}/>
                </button>
                <img src={hackfools} />
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
