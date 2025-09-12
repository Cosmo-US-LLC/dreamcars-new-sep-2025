import React from "react";
import Cham from "../../assects/icons/Cham.png";
import Fifa from "../../assects/icons/Fifa.png";
import MLB from "../../assects/icons/MLB.png";
import NBA from "../../assects/icons/NBA.png";
import NFT from "../../assects/icons/NFT.png";
import UFC from "../../assects/icons/UFC.png";



// const imgData = [
//     {
//         id: 7,
//         imgName: Fifa,
//     },
//     {
//         id: 5,
//         imgName: Cham,
//     },
//     {
//         id: 3,
//         imgName: MLB,
//     },
//     {
//         id: 4,
//         imgName: NBA,
//     },
//     {
//         id: 4,
//         imgName: NFT,
//     },
//     {
//         id: 4,
//         imgName: UFC,
//     }
// ]




const CompIcons = ({ imgName }) => {
    return (
        <>
            <div className="w-full py-8 space-y-4" >

                <div>
                    <a href="" >
                        <img className="flex justify-center m-auto w-[140px] xs:w-[90px] sm:w-[90px] " src={imgName} alt="" />
                    </a>
                </div>
               



            </div>

        </>
    )
}
export default CompIcons