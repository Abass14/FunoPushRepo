import messaging from '@react-native-firebase/messaging';

export const requestIosNotificationPermission = async () => {
    return messaging().requestPermission()
}