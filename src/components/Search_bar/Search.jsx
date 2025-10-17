//! serach using dummy data

import { useState } from "react"

const Search = ()=>{
    const arr = ['Arjun','React','React developer','Mern','Mern developer']

    const [input,Setinput] = useState('')
    const [data,setData] = useState([])


    const handleSearch = (e)=>{
        e.preventDefault()
       // const updateFilter = arr.filter((item)=>item.toLocaleLowerCase() ===input.toLocaleLowerCase())
       const updateFilter = arr.filter((item)=>item.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
        setData(updateFilter)
        
    }
    return <div>
        <span>
            <label htmlFor=""></label>
            <input value={input} type="text" name="" onChange={(e)=>Setinput(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </span>
        <span>
            {data?.map((value)=>{
                return <div>
                    {value}
                </div>
            })}
        </span>
    </div>
}

export default Search