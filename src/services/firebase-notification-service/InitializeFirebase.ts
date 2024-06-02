import * as FirebaseMessage from '@react-native-firebase/messaging';
import { requestNotificationPermission } from '../permission-service/NotificationPermissions';
import { firebaseConfig } from '../../config/firebase-config';
import { Alert } from 'react-native';
import { createAndroidChannel } from './AndroidChannel';
import { AndroidChannelName } from '../../constants/NotificationConstants';

const {firebase} = FirebaseMessage;
const {initializeApp, apps} = firebase;

/** initializes firebase app */
export const initFirebaseMessaging = async() => {
    try {
        const isPermissionGranted = await requestNotificationPermission()
        if (!isPermissionGranted) return
        if (!apps?.length && firebaseConfig) {
            await initializeApp(firebaseConfig)
        }
        await createAndroidChannel(
            AndroidChannelName.channelId,
            AndroidChannelName.channelName
        )
    } catch (error) {
        console.log(error)
        Alert.alert('Firebase Initialization Error')
    }
}