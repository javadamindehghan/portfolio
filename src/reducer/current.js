export const currentreducer=(state=0,action)=>{
    switch (action.type) {
        case 'CURRENT':
            
           return action.payload
    
        default:
         return  state
    }
}