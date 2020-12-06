import {
    ADD_SEASON,
    REMOVE_SEASON,
    COMPLETE_SEASON
} from '../action/action.type'

const initialState=[];

export default (state=initialState,action)=>{
switch (action.type) {
    case ADD_SEASON:
        return [...state,action.payload]
    
    case REMOVE_SEASON:
        return state.filter((season)=>season.id!==action.payload)
    
    case COMPLETE_SEASON:
          if (season.id==action.payload.id) {
              season.isWatched=!season.isWatched
              
          }
          return season
        

    default:
        return [];
        break;
}
}