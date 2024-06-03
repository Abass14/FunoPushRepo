import React, { Dispatch, ReactNode, useEffect } from "react";
import QuitStateContext from './QuitContext'
import { IQuitState } from "./state";
import { QuitStateAction, SetQuitStateData } from "./actions";
import Storage from "../../storage";
import { StorageKeys } from "../../storage/constant";
import { AppState } from "react-native";

interface Props {
    children: ReactNode,
    state: IQuitState,
    dispatch: Dispatch<QuitStateAction>
}

const QuitStateProvider = ({ children, state, dispatch }: Props) => {

    const dispatchQuitState = (data: object) => {
        dispatch({
            type: SetQuitStateData.SET_QUIT_STATE_DATA,
            payload: data
        })
    }

    const getPersistedNotificationData = async () => {
        const data = await Storage.getItemAsObject<Record<string, any>>(StorageKeys.SaveNotificationData)
        if (data) {
            dispatchQuitState(data)
            Storage.removeItem(StorageKeys.SaveNotificationData)
        }
    }

    useEffect(() => {
        getPersistedNotificationData()
        const subscription = AppState.addEventListener('change', (state) => {
            getPersistedNotificationData()
        });

        return () => {
            subscription.remove();
        };
    }, [])

    return (
        <QuitStateContext.Provider
            value={{ ...state, dispatchQuitState }}
        >
            {children}
        </QuitStateContext.Provider>
    )
}

export default QuitStateProvider