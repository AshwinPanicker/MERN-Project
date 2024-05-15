import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu'id='explore-menu' >
        <h1>Explore our menu</h1>
          <p className='explore-menu-texts'>Choose from diverse menu featuring a delectable arrayof dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dinning experience, one delicious meal at a time.</p>
          <div className='explore-menu-list'>
              {menu_list.map((item,index)=>{
                return(
                    <div   className='explore-menu-list-item' onClick={()=>setCategory(prev=>prev===item.menu_name ? "all": item.menu_name)}>
                       <img src={item.menu_image} alt="" className={category===item.menu_name?"active":""} />
                       <p>{item.menu_name}</p>
                    </div>
                )
              })}
          </div>
          <hr />
    </div>
  )
}

export default ExploreMenu