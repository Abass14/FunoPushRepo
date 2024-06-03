import notifee from '@notifee/react-native';
import { Platform } from 'react-native';

/**Creates a Notification channel for Android */
export const createAndroidChannel = async (
    channelId: string,
    channelName: string
) => {
    if (Platform.OS !== 'android') return
    const isChannelCreated = await notifee.isChannelCreated(channelId)
    if (isChannelCreated) return
    return await notifee.createChannel({
        id: channelId,
        name: channelName
    })
}