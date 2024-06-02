import notifee, {AndroidImportance, IOSForegroundPresentationOptions
    , Notification} from '@notifee/react-native';
import { createAndroidChannel } from './AndroidChannel';
import { AndroidChannelName } from '../../constants/NotificationConstants';

/** Display local notifications */
export const displayLocalNotification = async (notification: Notification) => {
    await createAndroidChannel(AndroidChannelName.channelId, AndroidChannelName.channelName)
    await notifee.displayNotification({
        ...notification,
        android: {
            ...notification.android,
            channelId: AndroidChannelName.channelId,
            importance: AndroidImportance.HIGH
        }
    })
}