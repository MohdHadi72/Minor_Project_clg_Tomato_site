import { createContext } from 'react'
import { useState } from 'react'
import { food_list } from '../assets/assets'
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((Prev) => ({ ...Prev, [itemId]: 1 }))
    }
    else {
      setCartItems((Prev) => ({ ...Prev, [itemId]: Prev[itemId] + 1 }))
    }
  }

  const removeFromeCart = (itemId) => {
    setCartItems((Prev) => ({ ...Prev, [itemId]: Prev[itemId] - 1 }))
  }

  //  useEffect(()=>{
     
  //  })
   

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromeCart
  }


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;