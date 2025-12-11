import { useEffect, useRef, useState } from "react";

const InfiniteLoading = ()=>{
    const [data,setdata] = useState([])
    const [page,setPage] = useState(1)
    const infiniteRef = useRef(null)

    const fecthdata = async()=>{
        const list = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`)
        const json = await list.json()
        setdata((prev)=>[...prev,...json])
        
    }
    console.log(data)
    useEffect(()=>{
        fecthdata()
    },[page])
    //^ infinite data fetch

    useEffect(()=>{
        if(!infiniteRef.current) return
        const observer = new IntersectionObserver(([entry])=>{
            //console.log(entry)
            if(entry.isIntersecting){
                setPage((page)=>page+1)
            }
        },{threshold:1})
       observer.observe(infiniteRef.current)

       //cleanup Obsever
       return (()=>{observer.unobserve(infiniteRef.current)})
    },[data])
    //useEffect(()=>{infiniteFetch()},[])
    
    

    return <div>
        <div>
        {data.map((d)=>{
            return <div key={d.id}> 
            <span>
                <p>{d.author}</p>
                <img style={{'height':"200px", "width":"300px"}} src={d.download_url} />
            </span>
            </div>
        })}
        </div>
        <div>
            <p ref={infiniteRef}> loading....</p>
        </div>
    </div>
}
export default InfiniteLoading;