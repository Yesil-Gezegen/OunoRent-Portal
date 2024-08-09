import React, { useEffect, useRef, useState, useMemo } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Faq = ({ data }) => {
  const [activeFaqId, setActiveFaqId] = useState(null);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => a.orderNumber - b.orderNumber);
  }, [data]);

  useEffect(() => {
    const newHeights = {};
    sortedData.forEach((faq) => {
      if (contentRefs.current[faq.faqId]) {
        newHeights[faq.faqId] = contentRefs.current[faq.faqId].scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [sortedData]);

  const handleClick = (faqId) => {
    setActiveFaqId(activeFaqId === faqId ? null : faqId);
  };

  return (
    <section className="pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24">
        <div className="flex justify-center items-center max-lg:max-w-3xl mx-auto max-w-full w-full lg:w-2/3">
          <div className="w-full">
            <div className="mb-6 lg:mb-16">
              <h6 className="text-lg text-center font-medium text-qred mb-2 lg:text-left">
                SSS
              </h6>
              <h2 className="text-4xl text-center font-bold text-qblack leading-[3.25rem] mb-5 lg:text-left">
                Sıkça Sorulan Sorular
              </h2>
            </div>
            <div>
              {sortedData.map((faq) => (
                <div
                  key={faq.faqId}
                  className={`py-8 border-b border-solid border-gray-200 ${
                    activeFaqId === faq.faqId ? "active" : ""
                  }`}
                >
                  <button
                    className="group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-qred"
                    onClick={() => handleClick(faq.faqId)}
                    aria-expanded={activeFaqId === faq.faqId}
                  >
                    <h5 className="text-start">{faq.label}</h5>
                    <IoIosArrowDown
                      size={22}
                      className={`text-gray-900 transition-transform duration-500 group-hover:text-qred ${
                        activeFaqId === faq.faqId ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    ref={(el) => (contentRefs.current[faq.faqId] = el)}
                    className={`w-full overflow-hidden transition-all duration-500 ${
                      activeFaqId === faq.faqId ? "max-h-auto" : "max-h-0"
                    }`}
                    style={{
                      maxHeight:
                        activeFaqId === faq.faqId
                          ? `${heights[faq.faqId]}px`
                          : "0",
                    }}
                    aria-hidden={activeFaqId !== faq.faqId}
                  >
                    <p className="text-base font-normal text-gray-600">
                      {faq.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
