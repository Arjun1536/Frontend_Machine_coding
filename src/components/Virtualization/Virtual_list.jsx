import { useState } from "react";

const Virtual_list = ()=>{
    const arr = Array.from({length:100},(__dirname,index)=> index+1)

    //! we can pass these things in props also for sepearte code
    const height = 400;
    const itemHeight =25;
    const noOfvisibleItem = Math.floor(height/itemHeight)
    console.log(noOfvisibleItem)
    const [indecies,setIndecies] = useState([0,noOfvisibleItem])
    const visibleItem = arr.slice(indecies[0],indecies[1])
    //console.log(visibleItem)
    //console.log(arr)
    const handleScroll = (event)=>{
        const {scrollTop} = event.target;
        console.log(scrollTop)
        const startIndex = Math.floor(scrollTop/itemHeight)
        const endIndex = startIndex + noOfvisibleItem
        setIndecies([startIndex,endIndex])

    }

    return <div style={{height:height,
        backgroundColor:"grey",
        overflow:'auto',
        

    }} onScroll={handleScroll}>
       
        <div  style={{height: arr.length* itemHeight}}> 
            <div style={{transform:`translateY(${indecies[0]* itemHeight}px)`}}>


        {visibleItem.map((data)=> {return <div key={data}> 
            <p>
            List {data}
            </p>
        </div>})}
        </div>
        </div>
    </div>
}

export default Virtual_list;