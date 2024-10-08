import { GET_MOVIE_DETIALS } from "../Actions/Types";

export default function movieDetailsReducer(state ={} , action){
    switch (action.type) {
        case GET_MOVIE_DETIALS :

            return action.payload;
    
        default:
            return state;
    }
}