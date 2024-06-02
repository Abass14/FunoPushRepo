import { FIREBASE_APP_ID_ANDROID, FIRE_BASE_API_KEY_ANDROID, FIRE_BASE_PROJECT_ID_ANDROID, FIRE_BASE_SENDER_ID_ANDROID } from "@env";

/*Firebase Config for Android OS */
export const firebaseConfigAndroid = {
    apiKey: FIRE_BASE_API_KEY_ANDROID,
    authDomain: `${FIRE_BASE_PROJECT_ID_ANDROID}.firebaseapp.com`,
    databaseURL: 'https://DATABASE_NAME.firebaseio.com',
    projectId: FIRE_BASE_PROJECT_ID_ANDROID,
    storageBucket: `${FIRE_BASE_PROJECT_ID_ANDROID}.appspot.com`,
    messagingSenderId: FIRE_BASE_SENDER_ID_ANDROID,
    appId: FIREBASE_APP_ID_ANDROID,
};