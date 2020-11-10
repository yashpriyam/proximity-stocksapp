import { createContext } from 'react'

const StockHistoryVisibilityContext = createContext({
    stockHistoryVisible: Boolean,
    setStockHistoryVisible: () => {}
  })

export default StockHistoryVisibilityContext