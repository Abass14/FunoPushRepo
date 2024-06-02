import { FIREBASE_APP_ID_IOS, FIRE_BASE_API_KEY_IOS, FIRE_BASE_PROJECT_ID_IOS, FIRE_BASE_SENDER_ID_IOS, FIRE_BASE_STORAGE_BUCKET_IOS } from "@env";

/*Firebase Config for iOS OS */
export const firebaseConfigIos = {
  apiKey: FIRE_BASE_API_KEY_IOS,
  authDomain: `${FIRE_BASE_PROJECT_ID_IOS}.firebaseapp.com`,
  databaseURL: 'https://DATABASE_NAME.firebaseio.com',
  projectId: FIRE_BASE_PROJECT_ID_IOS,
  storageBucket: FIRE_BASE_STORAGE_BUCKET_IOS,
  messagingSenderId: FIRE_BASE_SENDER_ID_IOS,
  appId: FIREBASE_APP_ID_IOS,
};