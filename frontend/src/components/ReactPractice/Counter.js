
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  function AddNo() {
    setCount(count + 1);
  }


  return (
    <div>
      <h2>Count : {count}</h2>
      <button className="CliclTheButtonAddNo" onClick={AddNo}>
        Add No
      </button>
    </div>
  )
}

export default Counter
