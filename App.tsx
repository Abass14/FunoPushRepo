/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { handleBackgrounQuitMessages } from './src/services/firebase-notification-service/BackgroundQuitMessageHandler';
import Provider from './src/context/provider';
import MainApp from './src/app';
import Storage from './src/storage';
import { StorageKeys } from './src/storage/constant';

handleBackgrounQuitMessages(
  async (remoteMessage) => {
      // Handle background/quit push notification messages here
      if (remoteMessage?.data) {
        await Storage.saveItem(JSON.stringify(remoteMessage.data), StorageKeys.SaveNotificationData)
      }
  }
)

function App(): React.JSX.Element {

  return (
    <Provider>
      <MainApp />
    </Provider>
  );
}

export default App;
