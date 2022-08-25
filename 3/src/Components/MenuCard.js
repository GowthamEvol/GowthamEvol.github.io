import React from 'react'
import {} from "@mui/material"
import {ChevronRightRounded} from "@mui/icons-material"

function MenuCard({imgSrc, name, isActive}) {
  return <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
    <div className='imgBox'>
        <img src={imgSrc}alt=''/>
    </div>
    <h3>{name}</h3>
    <i className='loadMenu'>
        <ChevronRightRounded />
    </i>
  </div>
}

export default MenuCard