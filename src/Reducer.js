export const reducerFun = (state,action) =>{
    
    switch(action.type){
        
        
      case "sort_change":

      return {
        ...state,
        sort_btn:action.payload
      }

      break;

      
      //budget
      case "change_range":
          return {
            ...state,
            price_range:action.payload
        }
        break;

        // case "Amenities":
        //     return {
        //         ...state,
        //         Amenities:action.payload.check ? [...state.Amenities, action.payload.option] :
        //         state.Amenities.length>0 ? state.Amenities.filter(Amen =>Amen!==action.payload.option):[]
                
        //     };
            
            case "gender":
                return {
                    ...state,
                    gender:action.payload.check ? [...state.gender, action.payload.option] :
                    state.gender.length>0 ? state.gender.filter(gen =>gen!==action.payload.option):[]
                    
                };
                break;
                case "clear":
                  return {
                      ...state,
                      sort_btn:null,
                     price_range:[2000,20000], 
                     gender:[]
                     
                  }
                  break;
        //         case "price":
        //             return{
        //                 ...state,
        //                 price:action.payload
        //             }
        default: return state;
        break;
            
    
    }
    
}