import React from "react"



const InputField = ({ inputType, inputIconUpload, inputIcon, iconClasses, label, inputClasses, placeholder, uplodefileLabel, fileLabelClasses, value, filename, handleInputChange, filelabelparentClasses, multiple }) => {

    // console.log(filename, 'filename')


    return (
        <>

            <div className="space-y-2  ">
                <label htmlFor="" className="text-[16px] font-[600]">{label}</label>
                <div className="relative w-[100%] h-[auto] py-[15px] px-4  flex rounded-lg border">
                    {
                        value ? " " : <div className="flex absolute inset-y-0 left-1 items-center pl-3 pointer-events-none">
                            <img src={inputIconUpload} className={`${iconClasses}`} alt="" />
                        </div>
                    }
                    {
                        multiple ?
                            <input type={`${inputType}`} className={`${inputClasses}`} placeholder={`${placeholder}`} onChange={handleInputChange} multiple /> :
                            <input type={`${inputType}`} className={`${inputClasses}`} placeholder={`${placeholder}`} onChange={handleInputChange} />

                    }

                    <div className={`${filelabelparentClasses}`}>
                        {
                            inputType === 'date' ? (
                                <span className={`${fileLabelClasses}`}>
                                    {/* {value} */}
                                    {value ? value : uplodefileLabel}
                                </span>

                            ) : ("")
                        }


                        <span className={`${fileLabelClasses}`}>
                            {
                                filename?.length !== 0 ? (
                                    filename?.map((item, id) => (
                                        <span c key={id}>{item.path}</span>
                                    ))
                                ) : (
                                    <span> {uplodefileLabel}</span>

                                )

                            }
                        </span>
                    </div>
                    <div className="flex absolute inset-y-0 right-4 items-center pl-0  cursor-pointer">
                        <img src={inputIcon} className={`${iconClasses}`} alt="" />
                    </div>
                    {/* {
                        inputType == "date" ? (null) : (
                        )
                    } */}

                </div>
            </div>
        </>
    )
}
export default InputField;