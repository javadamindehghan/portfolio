export const handelcurrent=(i)=>{
   return async (dispatch)=>{
        await dispatch({type:'CURRENT',payload:i})
   }
}