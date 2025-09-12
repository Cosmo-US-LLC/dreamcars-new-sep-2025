import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { FaPlus, FaMinus } from "react-icons/fa6";

const FaqItem = ({ question,
  answer3,
  answer,
  isOpen,
  handleClick,
  answer2,
  table }) => {
  const { t } = useTranslation();

  const createMarkup = () => ({ __html: t(answer) });
  const contentStyles = {
    maxHeight: isOpen ? "1000px" : "0",
    opacity: isOpen ? "1" : "0",
    overflow: "hidden",
    transition: "max-height 0.9 ease, opacity 2s ease",
  };

  return (
    <div className={`border-b-[1.2px] border-solid ${isOpen ? "border-[#C3BABA]" : "border-[#C3BABA]"}  border-solid`}>
      <div
        className="flex justify-between items-center pt-[16px] xs:pt-[10px] xs:pb-[10] pb-[16px] gap-[25px] cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={`pt-[24px] xs:pt-[14px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[24px] text-[16px] text-[white] font-[700]`}
        >
          {t(question)}
        </div>
        <h4 className={`text-[18px] xs:text-[10px] rounded-full w-[26px] h-[26px] xs:h-[16px] xs:w-[16px]  flex items-center justify-center plusIcon  ${!isOpen ? "text-[#C3BABA] border-none rotate-0" : "rotate-[-180deg] border-none text-[#c3baba]"}`}>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </h4>
      </div>
      <div style={contentStyles}>
        {/* {isOpen && ( */}
        <div className="w-[100%] pr-[10px] pb-[12px]">
          <p
            className="pb-[10px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] text-[#fff] font-[400]"
            dangerouslySetInnerHTML={createMarkup()}
          // ref={contentRef}
          />
          {
            answer2 &&
            <p className="pb-[10px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] text-[#fff] font-[400] pt-[16px]"> {t(answer2)}</p>
          }
          {
            answer3 &&
            <p className="pb-[30px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] text-[#fff] font-[400] pt-[16px]">{t(answer3)}</p>
          }
        </div>
        {
          table &&
          <div className="pb-[2.4rem]">
            <div className="backdrop-blur-md border-t border-r rounded-[24px] bg-[#d1d5db1f] pt-[3px] px-[2px] ">
              <div className="flex justify-between faqtabl p-[15px] rounded-t-[24px]">
                <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] text-[#fff] font-[600] font-[Inter]">{`${t('FaqSection.answer6claims')}`}</h3></div>
                <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] text-[#fff] font-[600] font-[Inter]">{`${t('FaqSection.answer6Percentage')}`}</h3></div>
                <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] text-[#fff] font-[600] font-[Inter]">{`${t('FaqSection.answer6Unlock')}`}</h3></div>
              </div>
              <div className="flex justify-between   border-b border-white mx-[3px] py-[10px] px-[25px]">
                <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">1st {`${t('FaqSection.answer6claim')}`}</h3></div>
                <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">30%</h3></div>
                <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer6hours')}`}</h3></div>
              </div>
              <div className="flex justify-between  border-b border-white mx-[3px] py-[10px] px-[25px]">
                <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">2nd {`${t('FaqSection.answer6claim')}`}</h3></div>
                <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer7days')}`}</h3></div>
                <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer6days')}`}</h3></div>
              </div>
              <div className="flex justify-between py-[10px] px-[25px]">
                <div className="w-[40%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">3rd {`${t('FaqSection.answer6claim')}`}</h3></div>
                <div className="w-[30%]"><h3 className="text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer8days')}`}</h3></div>
                <div className="w-[30%]"><h3 className="text-end text-[16px] xs:text-[10px] font-[400] text-white font-[Inter]">{`${t('FaqSection.answer9days')}`}</h3></div>
              </div>
            </div>
          </div>
        }
        {/* )} */}
      </div>
    </div>
  );
};

const FaqList = () => {
  const { t } = useTranslation();

  const faqData = [
    {
      question: "FaqSection.question2",
      answer: "FaqSection.answer2",
    },
    {
      question: "FaqSection.question1",
      answer: "FaqSection.answer1",
    },
    {
      question: "FaqSection.question3",
      answer: "FaqSection.answer3",
    },
    {
      question: "FaqSection.question4",
      answer: "FaqSection.answer4",
    },
    {
      question: "FaqSection.question5",
      answer: "FaqSection.answer5",
    },
    {
      question: "FaqSection.question8",
      answer: "FaqSection.answer8",
    },
    {
      question: "FaqSection.question7",
      answer: "FaqSection.answer7",
    },
    {
      question: "FaqSection.question6",
      tableitem: true,
    },
    {
      question: "FaqSection.question9",
      answer: "FaqSection.answer9",
    },
    {
      question: "FaqSection.question10",
      answer: "FaqSection.answer10",
    },
  ];
  const [openItems, setOpenItems] = useState([]);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <>
      <div className="bgfaqsgr" id="faqs">
        <div className="2xl:w-[75%] xl:w-[75%] lg:w-[75%] md:w-[75%] sm:w-[85%] w-[85%] mx-auto pb-[95px] xs:pb-[2rem] xs:pt-[2rem]">
          <div className="text-center ">
            <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[26px]  font-[700] leading-[40px] 2xl:pb-[14px] xl:pb-[14px] text-[#fff] lg:pb-[14px] md:pb-[14px] sm:pb-[12px] pb-[10px]">
              {t('FaqSection.title')}
            </h2>
          </div>
          <div className="2xl:w-[95%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[100%] mx-auto">
            <div className="">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  answer2={faq.answer2}
                  answer3={faq.answer3}
                  table={faq.tableitem}
                  isOpen={openItems === index}
                  handleClick={() => handleClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqList;
