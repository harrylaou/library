import React from 'react'

const Tab = ({ filter, selectTab }) => (
  <li className={ filter.selected? 'active': '' } onClick={ () => {selectTab(filter.category)} } >
    <a href="#0">{ filter.category }</a>
  </li>
)

Tab.propTypes = {
  filter: React.PropTypes.object,
  selectTab: React.PropTypes.func
}

export default Tab