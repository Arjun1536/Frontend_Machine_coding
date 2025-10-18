//! serach using dummy data

import { useEffect, useState } from "react"

const Search = ()=>{
    const arr = ['Arjun','React','React developer','Mern','Mern developer']

    const [input,Setinput] = useState('')
    const [data,setData] = useState([])
    const [isSearch,setisSearch]= useState(false)


    const handleSearch = (e)=>{
        if (e)
        e.preventDefault()
       // const updateFilter = arr.filter((item)=>item.toLocaleLowerCase() ===input.toLocaleLowerCase())
       const updateFilter = arr.filter((item)=>item.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
        setData(updateFilter)
        setisSearch(true)
        
    }
    useEffect(()=>{
        if(input.trim()!==""){
        handleSearch()
        setisSearch(true)
        }
        else{
            setisSearch(false)
        }
        
    },[input])
    return <div>
        <span>
            <label htmlFor=""></label>
            <input value={input} type="text" name="" onChange={(e)=>Setinput(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </span>
        <span>
            {isSearch && <>
            {
            
            data?.map((value,index)=>{
                return <div key={index}>
                    {value}
                </div>
            })} 
            </>}
        </span>
    </div>
}

export default Search