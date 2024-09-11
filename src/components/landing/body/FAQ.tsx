"use client";
import faq from "@public/data/faq";

const FAQ = () => {
  return (
    <section id="faq">
      <div className="flex flex-col items-begin justify-center mb-48">
        <h1 className="self-center">FAQ</h1>
        {faq.map((faq, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-begin justify-center m-6"
            >
              <p className="text-xl font-normal text-gray-500">
                {faq.question}
              </p>
              <p className="text-lg font-thin text-gray-500">{faq.answer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
