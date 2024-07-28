import { useState } from "react"

import Form from "./Form"
function Header(){
 
const[isOpen , setIsopen] = useState(false)
const handlOpen = ()=>{
    setIsopen(true)
    
}
const handlClose = ()=>{
    setIsopen(false)
}
    return <div>

     <div className="bg-blue-500 flex justify-between px-10 py-4">
        <h1 className="text-5xl text-white">Noty</h1>
        <button onClick={handlOpen} className="bg-orange-500  rounded px-6">Add Note</button>
    </div>

    {
        isOpen == true ? <Form  Close={handlClose}/> :""
    }
    </div>
}

export default Header