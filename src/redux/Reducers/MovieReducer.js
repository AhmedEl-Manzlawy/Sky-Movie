import { GET_ALL_MOVIE, SEARCH_MOVIE } from "../Actions/Types";

export default function movieReducer(state =[] , action){
    switch (action.type) {
        case GET_ALL_MOVIE:
            return action.payload
        
        case SEARCH_MOVIE :
            return action.payload
        default:
            return state;
    }
}