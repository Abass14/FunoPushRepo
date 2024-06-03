import React, { ReactNode } from "react";
import useFirebase from "../services/firebase-notification-service/useFirebase";
import { SafeAreaView } from "react-native";
import DataDisplayScreen from "../screen/DataDisplayScreen";

const MainApp = () => {
    useFirebase()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* In the real sense, Navigation Container will be setup here */}
            <DataDisplayScreen /> 
        </SafeAreaView>
    )
}

export default MainApp