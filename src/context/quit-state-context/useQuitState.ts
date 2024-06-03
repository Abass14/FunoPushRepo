import { useContext } from "react"
import QuitContext from "./QuitContext"

export const useQuitState = () => {
    return useContext(QuitContext)
}