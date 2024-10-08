import { useState } from "react"

function Form(){
    const [click,setclick] =useState(0);
    return(
        <div>
            <p>you clicked {click} times</p>
            <button onClick={() => setclick(click +1)}>
                Click me

            </button>
        </div>
    )
}

export default Form
