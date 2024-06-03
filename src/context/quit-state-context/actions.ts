export type SET_QUIT_STATE_DATA = 'SET_QUIT_STATE_DATA'
export enum SetQuitStateData {
    SET_QUIT_STATE_DATA = 'SET_QUIT_STATE_DATA'
}

export type SetQuitStateAction = {
    readonly type: SetQuitStateData.SET_QUIT_STATE_DATA,
    payload: Record<string, any>
}

export type QuitStateAction = SetQuitStateAction