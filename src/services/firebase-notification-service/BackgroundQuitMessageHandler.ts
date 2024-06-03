import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import * as FirebaseMessage from '@react-native-firebase/messaging';
import notifee, { Notification } from '@notifee/react-native';

const {firebase} = FirebaseMessage;
const {apps} = firebase;

/** Retrieves remote notifications for background and quit modes */
export const handleBackgrounQuitMessages = (onMessage: (
    remoteMessage?: FirebaseMessagingTypes.RemoteMessage
) => Promise<void>) => {
    if (!apps.length) return
    return messaging().setBackgroundMessageHandler(onMessage)
}