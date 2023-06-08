import React from 'react'
import Filteritem from './Filteritem'
import './Filters.css'

const filterList=[
    {
        id:1,
        title: "Locality",
        icon: <i class="fa-sharp fa-solid fa-sort-down" ></i>,
    },
    {
        id:2 ,
        title: "Budget",
        icon: <i class="fa-sharp fa-solid fa-sort-down"></i>
    },
    {
        id:3,
        title: "Occupancy",
        icon: <i class="fa-sharp fa-solid fa-sort-down"></i>
    },
    {
        id:4,
        title: "Gender",
        icon: <i class="fa-sharp fa-solid fa-sort-down"></i>
    },
    {
        id:5,
        title: "Ammenities",
        icon: <i class="fa-sharp fa-solid fa-sort-down"></i>
    },{
        id:6,
        title: "My wishlist",
        icon: <i class="fa-sharp fa-solid fa-sort-down"></i>
    },
    {
        id:7,
        title: "More Filters",
        icon: <i class="fa-sharp fa-solid fa-sort-down"></i>
    },
    {
        id:8,
        title: "Sort by",
        icon: <i class="fa-sharp fa-solid fa-sort-down"></i>
    }
]

const Filters = () => {
  return (
    <div>
      <div className="max-width">
        <span className='path'>SIBLIZE</span>
        <Filteritem filterlist={filterList} />
      </div>
    </div>
  )
}

export default Filters