import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'
import styles from './Counter.module.css'

const Counter = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <div>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))} style={{"marginLeft": "2rem"}}>
          Increment + 5
        </button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter