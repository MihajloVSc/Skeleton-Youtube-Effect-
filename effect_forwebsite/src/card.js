import React from "react";
import pc from "./pc.png"
const Card = () => {
    return(
    <div className="border p-4 round shadow-2xl w-[80%] max-w-[500px]">
        <div className="realtive h-60 mb-4" >
            <img
            className=" w-full h-full object-cover"
            src={pc} />
        </div>
        <div>
            <p className="font-semibold">Gaming PC</p>
            <p className="text-sm pb-2"> Price: 749$</p>
            <p className="font-thin">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
    </div>
)
}
export default Card