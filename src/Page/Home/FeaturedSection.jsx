import React from "react";
import { useTranslation } from "react-i18next";


import img1 from "../../assects/svgs/ftsvgs (1).svg"
import img2 from "../../assects/svgs/ftsvgs (2).svg"
import img3 from "../../assects/svgs/ftsvgs (3).svg"
import img4 from "../../assects/svgs/ftsvgs (4).svg"
import img5 from "../../assects/svgs/ftsvgs (5).svg"
import img6 from "../../assects/svgs/ftsvgs (6).svg"
import img7 from "../../assects/svgs/ftsvgs (7).svg"


const imgData = [

    {
        id: 1,
        imgName: img6,
    },
    {
        id: 2,
        imgName: img7,
    },
    {
        id: 3,
        imgName: img5,
    },
    {
        id: 4,
        imgName: img4,
    },

]
const imgData2 = [
    {
        id: 1,
        imgName: img3,
    },
    {
        id: 2,
        imgName: img2,
    },
    {
        id: 3,
        imgName: img1,
    }

]


const FeaturedSection = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="featbggr px-10 xs:px-0  fetbg py-12 pb-[5rem] xs:py-9" >
                <div className="text-center">
                    <h2 className="font-[700] color text-[46px] xs:text-[26px] text-[#fff] ">{t('FeaturedSection.mainTitle')}</h2>
                </div>
                <div className="max-w-[1240px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[90%] mx-auto">
                    <div className=" mx-auto px-4 xs:px- pt-5 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-2 xs:grid-cols-4 sm:grid-cols-4 ">
                        {
                            imgData.map((item, id) => (
                                <img className="w-[auto] h-[auto] 2xl:max-h-[50px] xl:max-h-[50px] lg:max-h-[50px] md:max-h-[50px] sm:max-h-[50px] max-h-[30px] mx-auto xs:h-[auto]" src={item.imgName} alt="" />
                            ))
                        }

                    </div>
                    <div className="mx-auto px-4 xs:px-0 pt-5 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-2 xs:grid-cols-3 sm:grid-cols-3 items-end">
                        {
                            imgData2.map((item, id) => (
                                <img className="w-[auto] max-h-[50px] mx-auto h-[auto] xs:h-[auto]" src={item.imgName} alt="" />
                            ))
                        }

                    </div>
                </div>
            </div>

        </>
    )
}
export default FeaturedSection