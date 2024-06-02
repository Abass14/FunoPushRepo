import { Platform } from "react-native"
import { requestIosNotificationPermission } from "./IOSNotificationPermission"
import { requestAndroidNotificationPermission } from "./AndroidNotificationPermissions"

export const requestNotificationPermission = async () => {
    if (Platform.OS === 'android') {
        const response = await requestAndroidNotificationPermission()
        return response === 'granted' || response === 'unavailable'
    }
    if (Platform.OS === 'ios') {
        const response = await requestIosNotificationPermission()
        return response === 1
    }
    return false
}