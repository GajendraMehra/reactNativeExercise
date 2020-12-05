import {
    ADD_SEASON,
    REMOVE_SEASON,
    COMPLETE_SEASON
} from './action.type'

export const addSeason =(season)=>{
    return ({
        type:ADD_SEASON,
        payload:season
    })
}
export const removeSeason =(id)=>{
    return ({
        type:REMOVE_SEASON,
        payload:id
    })
}
export const markComplete =(id)=>{
    return ({
        type:COMPLETE_SEASON,
        payload:id
    })
}