import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useQuitState } from "../context/quit-state-context/useQuitState";

const DataDisplayScreen = () => {
    const {notificationData} = useQuitState()
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>
                Notification Data Display
            </Text>
            <Text>
                {JSON.stringify(notificationData)}
            </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 40
    },
    title: {
        fontSize: 25,
        fontWeight: '700'
    }
})

export default DataDisplayScreen