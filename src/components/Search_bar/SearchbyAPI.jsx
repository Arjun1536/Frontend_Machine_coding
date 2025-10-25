import { useEffect, useState } from "react"

const SearchbyAPI =()=>{
    const [data,setData] = useState([])
    const [input,setInput] = useState('')
    const [isSearch,setIsSearch] = useState(false)

    const handleSearch = async ()=>{
        const dummy = await fetch("https://dummyjson.com/recipes/search?q="+ input)
        const json = await dummy.json()
        setData(json.recipes)
        setIsSearch(true)
        console.log(json)
    }
    
    useEffect(()=>{
        const timer =setTimeout(()=>{
            if (input.trim()===""){
                setIsSearch
            }
        handleSearch()
        },3000)
        return ()=>clearTimeout(timer)
    },[input])

    return <div>
<h3 >This is serach by API</h3>
<input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
<button>Search</button>
<span>{isSearch &&(<>{data?.map((d)=>{
return <div>{d.name}</div>
    })}</>
    )}

    
</span>
    </div>
}
export default SearchbyAPI;