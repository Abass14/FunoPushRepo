import { PERMISSIONS, request } from "react-native-permissions"

export const requestAndroidNotificationPermission = async () => {
    return await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
}