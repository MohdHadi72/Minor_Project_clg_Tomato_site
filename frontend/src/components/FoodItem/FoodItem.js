import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromeCart } = useContext(StoreContext);
  return (
    <div className='food-itme'>
      <div className="food-itme-image-container">
        <img className='food-itme-image' src={image} alt="" />
        {!cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
          : <div className='food-itme-counter'>
            <img className='Itme-Remove' onClick={() => removeFromeCart(id)} src={assets.remove_icon_red} />
            <p className="Itme-Count">{cartItems[id]}</p>
            <img className='Itme-Add' onClick={() => addToCart(id)} src={assets.add_icon_green} />
          </div>
        }
      </div>
      <div className="food-itme-details">
        <div className="food-itme-name-rating">
          <h3>{name}</h3>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-itme-description">{description}</p>
        <h4 className="food-itme-price">$ {price}</h4>
      </div>

    </div>
  )
}

export default FoodItem
