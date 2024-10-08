import { ADD_FAV, REMOVE_FAV } from "../Actions/Types";

export default function favouriteReducer(state = [] , action){
    switch (action.type) {
        case ADD_FAV:
            return [...state , action.payload]
        case REMOVE_FAV :
            return state.filter(movie => movie.id !== action.payload)
        default:
            return state;
    }

}