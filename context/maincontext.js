import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartContextPrv = ({ children }) => {
  const [data, setData] = useState({})
  const [stat, setStat] = useState(Boolean)

  useEffect(() => {
    setData({
      grade: '',
      name: '',
      email: '',
      reason: '',
      whatyouknow:'',
      note:'',
      xp: '',
    })
  }, [])

  return <CartContext.Provider value={{ data, setData, stat, setStat }}>{children}</CartContext.Provider>
}

export default CartContextPrv
