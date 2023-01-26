import { useState } from 'react'

function Numi({i}){
    if (i==1) {
        return "First";
      } else if (i==2) {
        return "Second";
      } else if (i==3) {
        return "Third ";
      }
     }

function Slider(){
    const[numb=0, nfun] = useState(0)
    
    return (
        <div>
            <button onClick={() => nfun((numb)=>numb=1)}>One</button>
            <button onClick={() => nfun((numb)=>numb=2)}>Two</button>
            <button onClick={() => nfun((numb)=>numb=3)}>Three</button>
            <Numi i={numb}/>
        </div>
    )
}
export default Slider