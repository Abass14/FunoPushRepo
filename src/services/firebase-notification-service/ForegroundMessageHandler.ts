import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

/** Retrieves remote notifications when phone is in foreground state */
export const handlerForgroundMessages = (onMessage: (
    remoteMessage: FirebaseMessagingTypes.RemoteMessage
) => Promise<void>) => {
    return messaging().onMessage(onMessage)
}