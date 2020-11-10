import { createContext } from 'react'

const ChartVisibilityContext = createContext({
    chartVisible: Boolean,
    setChartVisible: () => {}
  })

export default ChartVisibilityContext