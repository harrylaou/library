import React from 'react'
import Tab from './Tab'

const TabList = ({ filters, selectTab }) => (
  <ul className="nav nav-pills text-center">
    {
      filters.map(filter => (
        <Tab filter={filter} selectTab={selectTab} key={filter.category}/>
      ))
    }
  </ul>
)

TabList.propTypes = {
  filters: React.PropTypes.array,
  selectTab: React.PropTypes.func
}

export default TabList