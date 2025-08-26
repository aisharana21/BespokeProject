import { faqData } from "./data/faqdata";
import ArrowButton from '../assets/arrow-24.png';
import { useState } from "react";
import './CSS/faq.css';

export function FAQ() {
  const [isActiveId, setIsActiveId] = useState(false);

  const showFaqAnswer = (id) => {
    setIsActiveId(isActiveId === id ? false : id);
  };

  return (
    <div className="faq-container">
     <h2>Frequently Asked Questions</h2>
      {faqData.map((data) => (
        <div className={isActiveId === data.id ? "faq active" : "faq"} key={data.id}>
          <div className="faq-question-answer">
            <div className="tab-title">
              <h5>  { data.question }
</h5>
              <button
                onClick={() => showFaqAnswer(data.id)}
                className="tab-open-arrow"
              >
                <img src={ArrowButton} alt="Toggle" />
              </button>
            </div>
            <div className="faq-answer">
              {data.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
