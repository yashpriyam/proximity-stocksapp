import React, { createContext, useReducer } from 'react'
import { reducer, appState } from './globalState.reducer';



export const AppStateContext = createContext()

export const AppStateProvider = ({ children }) => {
    const stateAndDispatcher = useReducer(reducer, appState);
    return (
        <AppStateContext.Provider value={{ stateAndDispatcher }}>
            {children}
        </AppStateContext.Provider>
    )
}

