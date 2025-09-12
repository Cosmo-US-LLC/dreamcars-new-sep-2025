import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const faqsData = [
  {
    question: "SomeQuestionsSec.question1",
    answer: "SomeQuestionsSec.answer1",
  },
  {
    question: "SomeQuestionsSec.question2",
    answer: "SomeQuestionsSec.answer2",
  },
  {
    question: "SomeQuestionsSec.question3",
    answer: "SomeQuestionsSec.answer3",
  },
  {
    question: "SomeQuestionsSec.question4",
    answer: "SomeQuestionsSec.answer4",
  },

];

function SomeQuestions() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="somegrbg pt-[3rem]">
      <div className=" max-w-[1221px] space-y-[3rem] 2xl:w-[100%] xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] mx-auto  pb-[4rem]">
        <div className="backdrop-blur-md bg-[#d1d5db1f] gradient-border-mask rounded-[34px] 2xl:px-[45px] xl:px-[45px] lg:px-[45px] md:px-[45px] sm:px-[1rem] px-[0.6rem] 2xl:pt-[3rem] xl:pt-[3rem] lg:pt-[3rem] md:pt-[3rem] sm:pt-[2rem] pt-[2rem] 2xl:pb-[3rem] xl:pb-[3rem] lg:pb-[3rem] md:pb-[3rem] sm:pb-[3rem] pb-[3rem] space-y-[2rem] ">
          <div>
            <h3 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[26px] text-[26px] text-[#fff] font-[700] text-center xs:w-[250px] mx-auto">
              {t('SomeQuestionsSec.title')}
            </h3>
            <h3 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[26px] text-[26px] text-[#fff] font-[700] text-center xs:w-[250px] mx-auto">
              About the Bonuses
            </h3>

          </div>
          <div className="space-y-[1rem] relative z-[1]">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className=" border-b-[2px] border-[#505050] px-[1rem] xs:px-[0.3rem] py-[20px]"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleClick(index)}
                >
                  <h4 className="2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[16px] text-[16px]  font-[400] text-[#fff] xs:w-[85%]">
                    {t(faq.question)}
                  </h4>
                  <span className="text-[20px] xs:text-[16px] font-[600] text-[#fff] border border-[#fff] rounded-[50px] w-[30px] flex justify-center items-center h-[30px]  p-0">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <p
                    className="faqp text-[#fff] w-[70%] xs:w-[90%] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[14px] font-[400] text-[#000]"
                    dangerouslySetInnerHTML={{ __html: t(faq.answer) }}
                  ></p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SomeQuestions;
