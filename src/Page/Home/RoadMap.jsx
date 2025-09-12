import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation, Mousewheel, Keyboard, Pagination } from "swiper/modules";
import Tick1 from "../../assects/images/tick1 (1).png";


const RoadMap = () => {
    const [slidesPerView, setSlidesPerView] = useState(5);
    const [selectedSlide, setSelectedSlide] = useState(null);
    const { t } = useTranslation();

    const updateSlidesPerView = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1200) {
            setSlidesPerView(3.3);
        } else if (screenWidth >= 768) {
            setSlidesPerView(2.9);
        } else if (screenWidth >= 640) {
            setSlidesPerView(2.4);
        } else if (screenWidth <= 640) {
            setSlidesPerView(1.3);
        }
    };

    useEffect(() => {
        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => {
            window.removeEventListener("resize", updateSlidesPerView);
        };
    }, []);

    const cardData = [
        {
            id: 1,
            qa: "RoadMap.phase1",
            comp: "RoadMap.btn1",
            phase: "RoadMap.swiperTitle1",
            paraData: [

                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara11",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara12",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara13",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara14",
                },
                {
                    id: uuidv4(),
                    tickIcon: Tick1,
                    para: "RoadMap.swiperpara15",
                },

            ]



        },
        {
            id: 2,
            badge: "current",
            qa: "RoadMap.phase2",
            phase: "RoadMap.swiperTitle2",
            paraData: [

                {
                    id: uuidv4(),
                    tickIcon: "",
                    para: "RoadMap.swiperpara21",
                },
                {
                    id: uuidv4(),
                    tickIcon: "",
                    para: "RoadMap.swiperpara22",
                },
                {
                    id: uuidv4(),
                    tickIcon: "",
                    para: "RoadMap.swiperpara23",
                },
                {
                    id: uuidv4(),
                    tickIcon: "",
                    para: "RoadMap.swiperpara24",
                },
                {
                    id: uuidv4(),
                    tickIcon: "",
                    para: "RoadMap.swiperpara25",
                },
                {
                    id: uuidv4(),
                    tickIcon: "",
                    para: "RoadMap.swiperpara26",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara27",
                    tickIcon: "",
                },

            ]
        },
        {
            id: 3,
            qa: "RoadMap.phase3",
            phase: "RoadMap.swiperTitle3",
            paraData: [

                {
                    id: uuidv4(),
                    tickIcon: "",
                    para: "RoadMap.swiperpara31",
                },
                {
                    id: uuidv4(),
                    tickIcon: "",
                    para: "RoadMap.swiperpara32",
                },
                {
                    id: uuidv4(),
                    tickIcon: "",
                    para: "RoadMap.swiperpara33",
                },
                {
                    id: uuidv4(),
                    tickIcon: "",
                    para: "RoadMap.swiperpara34",
                },
                {
                    id: uuidv4(),
                    tickIcon: "",
                    para: "RoadMap.swiperpara35",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara36",
                    tickIcon: "",
                },

            ]
        },
        {
            id: 4,
            qa: "RoadMap.phase4",
            phase: "RoadMap.swiperTitle4",
            paraData: [

                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara41",
                    tickIcon: "",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara42",
                    tickIcon: "",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara43",
                    tickIcon: "",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara44",
                    tickIcon: "",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara45",
                    tickIcon: "",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara46",
                    tickIcon: "",
                },

            ]
        },
        {
            id: 4,
            qa: "RoadMap.phase5",
            phase: "RoadMap.swiperTitle5",
            paraData: [

                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara51",
                    tickIcon: "",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara52",
                    tickIcon: "",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara53",
                    tickIcon: "",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara54",
                    tickIcon: "",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara55",
                    tickIcon: "",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara56",
                    tickIcon: "",
                },
                {
                    id: uuidv4(),
                    para: "RoadMap.swiperpara57",
                    tickIcon: "",
                },

            ]
        },
    ]
    const handleSlideClick = (id) => {
        setSelectedSlide(id);
    };

    return (
        <div className="bgrdmap" id="roadmap" >
            <div className="2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] max-w-[1240px] space-y-[2rem] xs:space-y-[1rem] pt-[1rem] xs:pt-[3rem] pb-[4rem] xs:pb-[0rem] xs:py-[5rem] mx-auto  " >
                <div className="relative z-[2]">
                    <h2 className=" font-[700] text-center text-[46px] xs:text-[26px] text-[#fff] z-[2]"> {t('RoadMap.title')}</h2>
                    <p className="text-[22px] text-[#fff] text-center  xs:text-[18px] font-[400] leading-[28px]">{t('RoadMap.para')}</p>
                </div>
                <div className="" >
                    <div className="" >
                        <Swiper
                            breakpoints={{
                                360: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                600: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                750: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1124: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            cssMode={true}
                            mousewheel={true}
                            keyboard={true}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            spaceBetween={14}
                            className="mySwiper flex justify-center !px-[1.5rem] h-[470px] xs:!h-[500px]"
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        >
                            {
                                cardData.map((item, id) => (
                                    <SwiperSlide className={`wrap  backdrop-blur-md gradient-border-mask-roadmap rounded-[54px] bg-[#d1d5db1f] p-12 !flex !flex-col !justify-between !h-[430px] xs:!h-[460px]  ${selectedSlide === id ? " " : "rounded-[40px]"
                                        }`}
                                        key={id}
                                        onClick={() => handleSlideClick(id)} >
                                        <div className=" space-y-4  ">
                                            <div className=" relative" >
                                                <h4 className="text-[#fff] text-[18px] xs:text-[16px] font-[800] ">{t(item.qa)}</h4>
                                                {
                                                    item.badge &&
                                                    <div className="absolute px-3 py-1 rounded-full right-[-1%] top-[-8%] bg-[#FFD02F]">
                                                        <p className="uppercase text-[12px] font-[700] ">{item.badge}</p>
                                                    </div> 
                                                }
                                            </div>
                                            <h3 className="font-[700] pb-2 text-[#fff] text-[32px] xs:text-[24px] leading-[29px]">{t(item.phase)}</h3>
                                            <div className="">
                                                {
                                                    item.paraData.map((i, k) => (
                                                        <div className="flex">
    
                                                            {i.tickIcon &&
                                                                <img className="w-[17px] h-[15px]  mr-2" src={i.tickIcon} alt="" />
                                                            }
                                                            <span key={k} className="font-[400] mb-2 text-gray-300  text-[15px] xs:text-[16px] leading-[18px]">{t(i.para)}</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>


                                        </div>
                                        <div className="flex justify-center relative z-[1]">

                                            {
                                                item.comp &&
                                                <>
                                                    {
                                                        item.id == 3 ?
                                                            item.comp &&
                                                            <div className="bgcolor flex items-center justify-center py-[12px] w-[70%] rounded-full">
                                                                <h4 className="  text-[16px] font-[700] font-[Inter]">{t(item.comp)}</h4>
                                                            </div> :
                                                            <div className="bgcolor flex  items-center justify-center py-[12px] w-[70%] py rounded-full">
                                                                <h4 className="  text-[16px] font-[700] font-[Inter]">{t(item.comp)}</h4>
                                                            </div>

                                                    }
                                                </>
                                            }
                                            <div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default RoadMap 
