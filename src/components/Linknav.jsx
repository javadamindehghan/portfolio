import {Link} from 'react-router-dom'
import{useSelector , useDispatch} from 'react-redux'
import {handelcurrent} from '../action/current'

export default function Linknav({toggleactive  ,nav ,current}) {
    const dispatch = useDispatch()
   let className ='active';
   let clas ='';
  
  
   const state = useSelector(state => state)
   
   
 

    return (
   
        
        <li onClick={()=>dispatch(handelcurrent(nav.id))}  className={(state==nav.id) ? className : clas}>   {nav.name} </li>
        
   
    )
}
