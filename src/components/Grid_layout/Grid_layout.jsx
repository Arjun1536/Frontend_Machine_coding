import { useState } from "react";

const Grid_layout = ()=>{
    // grid
    const grid_2d = Array.from({length:3},()=> new Array(3).fill(3) )  //^ make 3*3 grid
    console.log(grid_2d)
    const [grid,setGrid] = useState(grid_2d)
    return <div className="conatiner">
        <h3>Grid layout</h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: "10px",
        }}>
        {grid.map((grid_row,row_index)=>{
            return grid_row.map((grid_cols,col_index)=>{
                return <div 
                key={`${row_index}- ${col_index}`}
                 style={{
                border: "1px solid black",
                textAlign: "center",
                padding: "10px",
              }}
              className="active-grid">
                    
                    {grid_cols}
                     </div>
            })
        })}
        </div>
    </div>
}

export default Grid_layout;