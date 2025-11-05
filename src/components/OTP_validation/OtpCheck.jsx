import { useEffect, useRef, useState } from "react"

export  function OtpCheck (){
    const ref = useRef([])
    console.log(ref)
    const otp =5
    const [otpfield,setOtpfield] = useState(new Array(otp).fill(""))

    const handlevalue = (e,index)=>{
        console.log(e.key)
        const key = e.key;
        const newval = [...otpfield] 
        //& for backspace logic
        if (key==='Backspace'){
            newval[index] = ""
            setOtpfield(newval)
         if(index>0){ ref.current[index-1].focus()}
        }

        if (isNaN(key)) {return}
        // for refernces
        newval[index]=key
        if(index+1<otpfield.length){ref.current[index+1].focus()}
        setOtpfield(newval)
    }

    //& for fousing on first box when mount
    useEffect(()=>{
        ref.current[0].focus()
    },[])

    return <div >
         <h1 style={{ color: "Green" }}>OTP Validation</h1>
         
         {
            otpfield.map((val,index)=>{
                return (
                    <input 
                    ref={(currentVal)=>(ref.current[index] = currentVal)}
                     className="otp-input" 
                     key={index} type="text" value={val} onKeyDown={(e)=>handlevalue(e,index)}/>
                )
            })
         }
         </div>
    
}