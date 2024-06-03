import AsyncStorage from "@react-native-async-storage/async-storage"

const Storage = {
    getItemAsObject: async <T>(key: string) => {
        try {
            let data = await AsyncStorage.getItem(key)
            return data ? JSON.parse(data) as T : null
        } catch (error) {
            return null
        }
    },
    saveItem: async (value: string, key: string) => {
        try {
            const stringifiedValue = typeof value === 'object' ? JSON.stringify(value) : value
            await AsyncStorage.setItem(key, stringifiedValue)
        } catch (error) {

        }
    },
    removeItem: async (key: string) => {
        await AsyncStorage.removeItem(key)
    }
}

export default Storage