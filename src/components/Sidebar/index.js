import React from 'react'
import PropTypes from 'prop-types'
import { Overlay, StyledSidebar } from '../Styled'

const Sidebar = ({ sectionList, onClose }) => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh'
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
