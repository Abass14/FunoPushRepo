import { QuitStateAction, SetQuitStateData } from "./actions";
import { IQuitState } from "./state";

const QuitStateReducer = (state: IQuitState, action: QuitStateAction) => {
    switch(action?.type) {
        case SetQuitStateData.SET_QUIT_STATE_DATA:
            return {
                ...state,
                notificationData: action.payload
            }
        default:
            return state
    }
}

export default QuitStateReducer