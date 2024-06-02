import { Platform } from "react-native";
import { firebaseConfigIos } from "./FRNIosConfig";
import { firebaseConfigAndroid } from "./FRNAndroidConfig";

export const firebaseConfig = Platform.select({
    ios: firebaseConfigIos,
    android: firebaseConfigAndroid
})