import { useRef, useState } from "react";
import {OptionText} from "../common/SearchComponent";
export default Orders


 function Orders() {
  const [check,setcheck]= useState(1)
  const option = 
    [
      {
          code: 1,
          param_meaning: 2,
      },
      {
          code: 2,
          param_meaning: 4,
      },
      {
          code: 3,
          param_meaning: 6,
      },
  
  ]
  
  
  
  return(
    <>
      <h1>{check}</h1>
      <OptionText
        defaultValue={check} 
        option={option}
        onChange={(newValue)=>setcheck(newValue.target.value)} 
      />
    </>
  )
}