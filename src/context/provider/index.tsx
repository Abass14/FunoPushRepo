import React, { ReactNode, useReducer } from "react"
import QuitStateReducer from "../quit-state-context/reducer"
import { quitState } from "../quit-state-context/state"
import QuitStateProvider from "../quit-state-context"

interface Props {
    children: ReactNode
}

const Provider = ({children}: Props) => {
    const [quitStateData, quitStateDispatcher] = useReducer(QuitStateReducer, quitState)

    return (
        <QuitStateProvider 
            state={quitStateData}
            dispatch={quitStateDispatcher}
        >
            {children}
        </QuitStateProvider>
    )
}

export default Provider