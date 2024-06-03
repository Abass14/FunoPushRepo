import { useEffect } from "react"
import { initFirebaseMessaging } from "./InitializeFirebase"
import { handlerForgroundMessages } from "./ForegroundMessageHandler"
import { displayLocalNotification } from "./LocalNotifications"
import { Notification } from "@notifee/react-native"
import { useQuitState } from "../../context/quit-state-context/useQuitState"


const useFirebase = () => {
    const {dispatchQuitState} = useQuitState()

    useEffect(() => {
        initFirebaseMessaging()
    }, [])

    useEffect(() => {
        const unsubscribeMessaging = handlerForgroundMessages(
            async (remoteMessage) => {
                // Handle foreground push notification messages here
                if (remoteMessage?.data) {
                    displayLocalNotification(remoteMessage?.notification as Notification)
                    dispatchQuitState(remoteMessage?.data as object)
                }
            }
        )
        return () => unsubscribeMessaging() //Unsubscribe from firebase messaging when app is unmounted
    }, [])
}

export default useFirebase