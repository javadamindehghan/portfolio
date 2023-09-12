import { useEffect } from "react"


export default function Percentage({skill,Percentage ,type}) {

 
      
    
   
  
   
  

    var a =parseInt(Percentage)
    a= a+"%"
    

  
 
 
    const percentag ={
        width: a,
        height: 100+'%'
    }
    return (
        <>
       
        <div className="skillPercentage">
            <h4> {skill}</h4>
            <h4>{Percentage}%</h4>
        </div>
        <div className="parentPercentage">
            <div  style={percentag}>
                <div className={`fillPercentage ${type}`}></div>
            </div>
        </div>
        </>

    )
}
