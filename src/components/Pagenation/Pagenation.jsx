import { useState } from "react"

const Pagenation = ({pageNo,setPageNo})=>{
    const [pageSeries,setPageSeries] = useState([])

    const prevThree = Array.from({length :3},(_, index)=>pageNo -1 -index).filter((val)=>val>0).reverse()
    console.log(prevThree)

    const nextThree = Array.from({length:3},(_,index)=> pageNo+index)
    console.log(nextThree)
    console.log([...prevThree,...nextThree])
    //setPageNo([...prevThree,...nextThree])
    //console.log(pageSeries)
    const pagenationArr = [...prevThree,...nextThree]
    const handlePrev = ()=>{
        setPageNo(pageNo-1)
    }
    const handleNext = ()=>{
        setPageNo(pageNo+1)
    }
    return <div className="pagenation-container">
        {(pageNo>1)? 
        <button onClick={handlePrev} className="pgn-btn">⬅️</button> :""}
        
        {pagenationArr.map((val)=>{
            return <button onClick={()=>setPageNo(val)} className={val == pageNo? "active":""}>{val}</button>
        })}
        <button onClick={handleNext} className="pgn-btn">➡️</button>
    </div>
}

export default Pagenation;