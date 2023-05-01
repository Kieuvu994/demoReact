import child1 from './child1'
import child2 from './child2'
import React, { useState } from 'react';
function Apps(){
  const [user,setuser] = useState('hello state')
  return (
    <div>
      paren
<h2 onClick={setuser("aaaaa")}>
        {user}
      </h2>
      <child1></child1>
      <child2></child2>
    </div>
  )
}
export default Apps;
