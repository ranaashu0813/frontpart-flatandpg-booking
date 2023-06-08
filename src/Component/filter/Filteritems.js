import React from 'react'
import './Filters.css'
const FilterItems = ({filters}) => {

  return (
    <div className='filter-item'>
  
      <div className='filter-title'>{filters.title}</div>
      <div className='filter-icon'>{filters.icon}</div>
      </div>
    
  )
}

export default FilterItems