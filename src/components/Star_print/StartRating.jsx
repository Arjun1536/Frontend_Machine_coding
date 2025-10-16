import { useState } from "react"

const StarRating = () => {
    //const [star, setStar] = useState(5)
    const star = 10;
    const [starvalue,setStarValue] = useState()
    const[starToggle,setStarToggle] = useState(false)
    console.log(starvalue)
    return <div>
        {new Array(star).fill(0).map((s,index)=>(
            
            <span key={index} className={index<starvalue || index<starToggle ?"gold":""} 
            onClick={()=>setStarValue(index+1)}
            onMouseEnter={()=>setStarToggle(index+1)}
            onMouseLeave={()=>setStarToggle(0)}
            style={{ cursor: "pointer", fontSize: "2rem" }}
            >☆</span>
            
            ))}
        
    </div>
}

export default StarRating