function FunctionEvent(){
    function HandleClick(){
        console.log('Allah');
    }
    return (
        <div>
            <p>Functional Componet.</p>
            <button onClick={HandleClick}>Click</button>
        </div>
    )
}

export default FunctionEvent;