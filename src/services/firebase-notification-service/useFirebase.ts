import { useEffect } from "react"
import { initFirebaseMessaging } from "./InitializeFirebase"
import { handlerForgroundMessages } from "./ForegroundMessageHandler"
import { displayLocalNotification } from "./LocalNotifications"
import { Notification } from "@notifee/react-native"

const useFirebase = () => {
    useEffect(() => {
        initFirebaseMessaging()
    }, [])

    useEffect(() => {
        const unsubscribeMessaging = handlerForgroundMessages(
            async (remoteMessage) => {
                // Handle foreground push notification messages here
                displayLocalNotification(remoteMessage?.notification as Notification)
                console.log(JSON.stringify(remoteMessage.data), 'FOREGROUND MESSAGE')
            }
        )

        return () => unsubscribeMessaging() //Unsubscribe from firebase messaging when app is unmounted
    }, [])
}

export default useFirebase