const initialState = {
    isFetching: null,
    data: [],
    error: false,
    errMessage: null
}

export default function cryptoReducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_COIN_INFO':
            return {
                ...state,
                isFetching: true,
                data: null,
                error: false,
                errMessage: null
            }
        case 'FETCH_COIN_INFO_SUCCESS':
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: false,
                errMessage: null
            }
        case 'FETCH_COIN_INFO_ERROR':
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: true,
                errMessage: action.err
            }
        default:
            return state;
    }
}