import react,{useState,useEffect} from 'react';

const Count=()=>{
    const [counts,setCounts]=useState(0);
    let func=()=>{ setCounts(counts+1);
              }
            
                 
    return(<>
             <h1>{counts}</h1>
             <button onClick={func}>Increment</button>
          </>)
}
export default Count;