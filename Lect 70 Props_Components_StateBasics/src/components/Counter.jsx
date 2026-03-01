import { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(1);


  // let count = 1;
  console.log(count);

  return (
    <button style={{width:"30px"}}
      onClick={() => {
        // count += 1;
        setCount(count + 1);
        console.log(count);
      }}
    >
      {count}
    </button>
  );
};

export default Counter;
