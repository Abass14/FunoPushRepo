export interface IQuitState {
    notificationData: Record<string, any>,
    dispatchQuitState: (data: Record<string, any>) => void
}
export const quitState: IQuitState = {
    notificationData: {},
    dispatchQuitState: () => {}
}