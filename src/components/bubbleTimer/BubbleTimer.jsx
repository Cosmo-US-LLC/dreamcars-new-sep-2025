import React from "react"
import { useEffect } from "react";
import { useState } from "react";




const Timer = ({ setStageTimer, stageTimer }) => {


    const contributeStages = [1667142000, 1667574000, 1668006000, 1668438000,
        1668870000, 1669302000, 1669734000, 1670166000, 1670598000, 1671030000, 1671462000]
    const currentStages = [0, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5]
    const hoursMinSecs = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    const { days = 0, hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[dys, hrs, mins, secs], setTime] = useState([days, hours, minutes, seconds]);
    const [timer, setTimer] = useState(false);
    const [timeState, setTimeState] = useState(0);
    const [closeTimer, setCloseTimer] = useState(true);

    const handleCloseTimer = () => {
        setTimer(!timer);
        setCloseTimer(false)
    }

    function dhm(ms) {
        const days = Math.floor(ms / (24 * 60 * 60));
        const daysms = ms % (24 * 60 * 60);
        const hours = Math.floor(daysms / (60 * 60));
        const hoursms = ms % (60 * 60);
        const minutes = Math.floor(hoursms / (60));
        const minutesms = ms % (60);
        const sec = Math.floor(minutesms);
        if (days === 0) {
            setTime([days, hours, minutes, sec])
            setTimer(true)
        }
        else {
            setTimer(false)
        }
        return "Days: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + sec;
    }

    const tick = () => {

        if (closeTimer) {
            let today = new Date();
            let timeLeft;


            for (let x = 0; x < contributeStages.length; x++) {
                if (contributeStages[x] > (today.getTime() / 1000).toFixed(0)) {
                    timeLeft = contributeStages[x] - (today.getTime() / 1000).toFixed(0)
                    dhm(timeLeft)
                    setTimeState(x)
                    return
                }
            }
        }
    };

    const reset = () => setTime([parseInt(days), parseInt(hours), parseInt(minutes), parseInt(seconds)]);


    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div className="flex items-center justify-center py-3">

            <div className="w-full flex justify-end z-1">
                {
                    timer &&
                    <>
                        <div
                            className="formbold-form-wrapper  w-[365px] py-5 max-w-[550px] rounded-lg relative bg-[#e10d34f2]"
                        >
                            <div
                                className="flex items-center justify-center bg-[white]  px-3 w-[50px] h-[50px] absolute -right-3 -top-3 rounded-[40px]"
                            >

                                <button className="text-[#e10d34f2]  " onClick={handleCloseTimer}>
                                    <svg width="10" height="10" viewBox="0 0 17 17" className="fill-current">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className=" h-[100px] text-center py-2  space-y-3">
                                <h3 className="text-[14px] font-[Poppins] font-[600] text-[white]">{currentStages[timeState]}% Bonus ends in:</h3>

                                <div className="flex space-x-3 items-center justify-center text-white">
                                    <div>
                                        <h2 className="text-[26px] sm:text-[25px] xs:text-[25px] font-[700] leading-6">
                                            {`${dys.toString().padStart(2, '0')}`}
                                        </h2>
                                        <span className=" text-center text-[12px] font-[600] leading-6">Days</span></div>

                                    <div><h2 className="text-[26px] sm:text-[25px] xs:text-[25px] font-[700] leading-6">{`${hrs.toString().padStart(2, '0')}`}</h2><span className=" text-center text-[12px] font-[600] leading-6">Hours</span></div>

                                    <div><h2 className="text-[26px] sm:text-[25px] xs:text-[25px] font-[700] leading-6">{`${mins
                                        .toString()
                                        .padStart(2, '0')}`}</h2><span className=" text-center text-[12px] font-[600] leading-6">Mins</span></div>

                                    <div><h5 className="text-[26px] sm:text-[25px] xs:text-[25px] font-[700] leading-6">{`${secs.toString().padStart(2, '0')}`}</h5><span className=" text-center text-[12px] font-[600] leading-6">Sec</span></div>
                                </div>


                            </div>

                        </div>

                    </>

                }
            </div>
        </div>
    )
}
export default Timer;
