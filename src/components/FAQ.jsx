import { faqData } from "./data/faqdata";
import ArrowButton from '../assets/arrow-24.png';
import { useState } from "react";
import './CSS/faq.css';
import { motion } from "framer-motion";

export function FAQ() {
  const faqContainerariant= {
    hidden:{ 
      opacity: 0,
       x: -100       
    },
    visible:{
       opacity: 1,
        x: 0,
        transition:{
          delay: 0.2,
           duration: 1,
            ease: "easeOut"
        }
    }

  }
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
              <motion.h5
              variants={faqContainerariant}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              >
                  { data.question }
</motion.h5>
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
