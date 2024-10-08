import { ADD_FAV, REMOVE_FAV } from "./Types";

export const addFavourite =(payload)=>({
    type :ADD_FAV , payload 
})

export const removeFavourite =(payload)=>({
    type : REMOVE_FAV , payload
})