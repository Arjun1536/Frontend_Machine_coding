import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment, reset } from './counterSlice'

const Counter = ()=>{
    const countValue = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return <div>
        <h2>Counter with redux</h2>
        <h4>Counter value:{countValue} </h4>
        <br />
        <button onClick={()=>dispatch(increment())}>Increase</button>
        <button onClick={()=>dispatch(decrement())}>Decrease</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
}

export default Counter;