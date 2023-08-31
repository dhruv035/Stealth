import React from "react";

const Card = (props)=>{
    
    return(
        <div className="rounded-lg w-[350px] h-auto p-1 bg-blue-100 mx-3">
            {props.children}
        </div>
    )
}

export default Card