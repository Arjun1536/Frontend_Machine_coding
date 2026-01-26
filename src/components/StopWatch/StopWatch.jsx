import { useEffect, useState,useRef } from "react";

const StopWatch = ()=>{
    const [startTimer,setStartTimer] = useState(false)
    const [count,setCount] = useState(0)
    const startRef = useRef(null)
    //!using useEffect we can start Timer
    useEffect(()=>{
        if (startTimer){
            startRef.current = setTimeout(()=>{
                setCount((prev)=>prev+1000)
            },1000)
        }

        //! clean up the memory
        return (()=>clearTimeout(startRef.current))

    },[startTimer,count,setCount])

    const HandleStart= ()=>{
        // setStartTimer(true)
        setStartTimer((prev)=>!prev)
    }

    const handlereset = ()=>{
        setCount(0)
        setStartTimer(false)
        clearTimeout(startRef.current)
    }

    const formattedTimer = (time)=>{
        const getPaddedvalue = (val)=>{
            return !isNaN(val)? val<10 ?`0${Math.floor(val)}`:Math.floor(val):'00'
        }
        const seconds = time/1000 
        const resetSecond= seconds%60

        const minutes = seconds/60 
        const resetMinute = minutes%60

        const hours = minutes/60
        const secondPadded = getPaddedvalue(resetSecond)
        const minutepadded = getPaddedvalue(resetMinute)
        const hourpadded = getPaddedvalue(hours)

        return `${hourpadded}:${minutepadded}:${secondPadded}`
    }
    return <div>
    <div>
        {formattedTimer(count)}
    </div>
    <button onClick={HandleStart}>{startTimer? "pause":count>0? "resume":"start"}</button>
    <button onClick={handlereset}>Reset</button>
    
    
    </div>
}

export default StopWatch;