import { useCallback, useMemo, useRef, useState } from "react";


function Counter(){
    console.log('render Counter')
    const [number, setNumber] = useState(3);
    let countClick = useRef(0);

    function handleClick(e){
        e.stopPropagation();
       
       setNumber(number=>number+1);
       setNumber(number=>number+1);
       setNumber(number=>number+1);
       countClick.current++;
       console.log(countClick.current);
        
        // console.log(number)
    }

    
   const fibFunc = useCallback(function fib(n)
    {
        if(n===1 || n===2){
            return 1
        }

        return fib(n-1) + fib(n-2)
    }, [])

    

    const fibMemoized = useMemo(()=>fibFunc(number), [number, fibFunc])

    return(
        <>
        
        <h1 style={{color:'white'}}>{number} {countClick.current} {fibMemoized}</h1>
        <button style={{color:'black'}} onClick={handleClick}>Count</button>
        </>
    )

}

export default Counter;