import React from 'react'
import SideMenu from './Menus/SideMenu'
import SideMenuItem from './Menus/SideMenuItem'

const Menu = ({ isOpen, pageWrapId, toggleMenu }) => (
  <SideMenu
     isOpen={isOpen}
     toggleMenu={toggleMenu}
  >
    <h4>
      Next Courses
    </h4>
    <SideMenuItem link="https://reactjs.academy/react-redux-training-paris">Paris</SideMenuItem>
    <SideMenuItem link="https://reactjs.academy/react-redux-training-london">London</SideMenuItem>
    <SideMenuItem link="https://reactjs.academy/react-redux-training-berlin">Berlin</SideMenuItem>
    <SideMenuItem link="https://reactjs.academy/react-redux-training-amsterdam">Amsterdam</SideMenuItem>
    <SideMenuItem link="https://reactjs.academy/react-redux-training-brussels">Brussels</SideMenuItem>
    <a href="https://reactjs.academy/react-redux-training-london" target="_blank">
      <img className="img-responsive" src="/public/img/discount-code.png" />
    </a>
    <p className="text-center">
      <strong>20%</strong> of discount for those who join the waiting for Paris today!
    </p>
    <a className="text-center" href="https://reactjs.academy/react-redux-training-paris" target="_blank">
      ReactJS Academy
    </a>
  </SideMenu>
)

Menu.propTypes = {
  isOpen: React.PropTypes.bool,
  pageWrapId: React.PropTypes.string,
  toggleMenu: React.PropTypes.func
}

export default Menu
