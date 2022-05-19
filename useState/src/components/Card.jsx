import { useState } from "react";
import "./Card.css"

function Card(props) {

    const { name, email, phone, image } = props;
    const [active, isActive] = useState(false)

  
    return (
        <div className="container">
            <div ><img src={image}></img></div>
            <div>{name}</div>
            <div>{email}</div>
            <div className="curser-on-details">
                {/* if false show click to show more */}
                {active ? (<div onClick={() => isActive(!active)}>{phone}</div>)
                    : (
                        <div onClick={() => isActive(!active)}>Click for more details</div>)}
            </div>

            {/* else true show number */}
            
        </div>
    )
}

export default Card