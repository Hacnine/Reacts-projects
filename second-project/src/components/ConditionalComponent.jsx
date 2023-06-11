import { useState } from "react";

export default function ConditionalComponent(){
    const [display, setDisplay] = useState(false);

    return display ? (
        <div>
        <h1>Display True</h1>
        </div>
    ) : (
        <div>
        <h1>Display False</h1>
        </div>
    )
}


// export default function ConditionalComponent(){
//     const [display, setDisplay] = useState(true);
//     let output;
//     if (display){
//         output = <h1>Display True</h1>
//     }

//     else {
//         output = <h1>Display False</h1>
//     }

//     return <div>{output}</div>
// }