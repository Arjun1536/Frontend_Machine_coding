import { useEffect, useState } from "react";
import axios from 'axios'
import Pagenation from "./Pagenation";

const Fetch_Api =  function () {
  const [data, setData] = useState([]);
  const[pageNo,setPageNo] = useState(3)

  console.log(pageNo)


  // const fetch_data = async () => {
  //   try {
  //     const data1 = await fetch("https://api.github.com/users");
  //     const json = await data1.json();
  //     setData(json);
  //     console.log(json);
  //   } catch (e) {
  //     console.log("error fetching api");
  //   }
  // };

 //! using axios library

 const data_fetch = async()=>{
  const response =await axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
  setData(response.data)
  //console.log(response)
 }

  useEffect(() => {
    data_fetch()
  },[pageNo]);
  return (
    <div className="App ">
      <h1>Hello CodeSandbox hey</h1>
      <div className="container">
      {data.map((d) => {
        return (
          <div key={d.id}>
            <span >{d.author} </span>
            <span className="container-img"><img src={d.download_url} /> </span>
          </div>
        );
      })}
      </div>
      <Pagenation pageNo= {pageNo} setPageNo ={setPageNo} />
    </div>
  );
}
export default Fetch_Api;