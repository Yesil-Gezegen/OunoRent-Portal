import React, { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Nasıl hesap oluşturabilirim?",
    answer:
      "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
  },
  {
    question: "Ödeme yöntemleri nelerdir?",
    answer:
      "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
  },
  {
    question: "Kiralama süresini uzatabilir miyim?",
    answer:
      "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
  },
  {
    question: "Yardım ve destek nasıl alabilirim?",
    answer:
      "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    setHeights(contentRefs.current.map((ref) => (ref ? ref.scrollHeight : 0)));
  }, []);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`py-8 border-b border-solid border-gray-200 ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <button
                    className="group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-qred"
                    onClick={() => handleClick(index)}
                    aria-expanded={activeIndex === index}
                  >
                    <h5>{faq.question}</h5>
                    <svg
                      className={`text-gray-900 transition-transform duration-500 group-hover:text-qred ${
                        activeIndex === index ? "transform rotate-180" : ""
                      }`}
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className={`w-full overflow-hidden transition-all duration-500 ${
                      activeIndex === index ? "max-h-[1000px]" : "max-h-0"
                    }`}
                    style={{
                      maxHeight:
                        activeIndex === index ? `${heights[index]}px` : "0",
                    }}
                    aria-hidden={activeIndex !== index}
                  >
                    <p className="text-base font-normal text-gray-600">
                      {faq.answer}
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
