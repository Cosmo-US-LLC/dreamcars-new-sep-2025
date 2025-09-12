import React from "react"



const Button = ({ text, link, wallet, onClick, target, classes, imageClass, }) => {
    return (
        <div className="w-[100%]" >
            {
                link ?
                    <a href={`${link}`} target={target} className="w-[100%]">
                        <button onClick={onClick} type="button" className={`flex justify-center items-center border border-[#FFD02F] hover:border hover:border-[#FFD02F] hover:text-[#fff] hover:bg-[transparent] ${classes}`}>
                            {wallet &&
                                <img className={imageClass} src={wallet} alt="" />
                            }
                            <span className="">
                                {(text)}
                            </span>



                        </button>
                    </a> :

                    <button onClick={onClick} type="button" className={`flex justify-center items-center border border-[#FFD02F] hover:border hover:border-[#FFD02F] hover:text-[#fff] hover:bg-[transparent] ${classes}`}>
                        {wallet &&
                            <img className={imageClass} src={wallet} alt="" />
                        }
                        <span className="">
                            {(text)}
                        </span>
                    </button>
            }
            {/* <a href={`${link}`} target={target} className="w-[100%]">
                <button onClick={onClick} type="button" className={`flex justify-center items-center border border-[#FFD02F] hover:border hover:border-[#FFD02F] hover:text-[#fff] hover:bg-[transparent] ${classes}`}>
                    {wallet &&
                        <img className={imageClass} src={wallet} alt="" />
                    }
                    <span className="">
                        {(text)}
                    </span>



                </button>
            </a> */}

        </div>
    )
}
export default Button;