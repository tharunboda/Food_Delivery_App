import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='header-content'>
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes, each thoughtfully crafted using the finest ingredients and exceptional culinary expertise. From rich, flavorful starters to satisfying main courses and indulgent desserts, every item is designed to delight your taste buds. Our chefs blend traditional techniques with modern creativity to bring you a unique and memorable dining experience.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header