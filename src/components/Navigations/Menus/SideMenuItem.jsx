import React from 'react'

const SideMenuItem = ({ children, toggleMenu, link }) => (
  <p>
    <a href={link} target="_blank" style={{ cursor: 'pointer' }} onClick={ () => toggleMenu() }>
      {children}
    </a>
  </p>
)

SideMenuItem.propTypes = {
  children: React.PropTypes.string,
  toggleMenu: React.PropTypes.func,
  link: React.PropTypes.string
}

export default SideMenuItem
