type InitStateType = typeof initState
type ActionType = ReturnType<typeof loadingAC>

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'HW/SET-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: 'HW/SET-LOADING', isLoading} as const) // fix any