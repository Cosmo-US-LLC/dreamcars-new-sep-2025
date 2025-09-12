import React from "react";
import DropIcon from '../../assects/svgs/drop-down.svg';


const ButtonDropdown = ({ handleOpenDrop, handleAddNft, text, image, classes }) => {

    return (
        <div className="flex">
            <button onClick={handleOpenDrop} data-dropdown-placement="bottom" className={`${classes}`} type="button">
                <img onClick={handleAddNft} src={image} alt="" />
                <span>{text}</span>
                <img src={DropIcon} alt="" className="px-2" />
            </button>

        </div>
    )
}
export default ButtonDropdown;