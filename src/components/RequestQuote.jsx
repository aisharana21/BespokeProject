import { motion, scale, stagger } from 'framer-motion';
import './CSS/DefaultStyle/page-heading.css';
import { RequestQuoteForm } from './RequestQuoteForm';

export function RequestQuote(){
  const containerVariant={
hidden:{
  opacity:0 ,
  // scale: 0.8
},
visible:{
  opacity:1,
  // scale: 1,
  transition:{
    duration:1,
     ease: "easeOut",
    //  staggerChildren:0.2
  }
}

  }
  const childContainer={
    hidden:{
      opacity:0,
        scale: 0.8
    },
    visible:{
      opacity:1,
      scale:1,
      transition:{
        duration:1,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="request-quote-container">       
         <motion.div
          
           className="request-quote-description page-heading-description">
           <motion.div
           variants={containerVariant}
            initial='hidden'
    whileInView='visible'
  
    viewport={{ once: true }} 
           
           className="request-quote-heading page-heading">
            <motion.h2 variants={childContainer}>Request a Quote
</motion.h2>
            <motion.h3 variants={childContainer}>Your Vision, Our Expertise - Let's Create Together

</motion.h3>
           </motion.div>
           <motion.div 
       variants={containerVariant}
            initial='hidden'
    whileInView='visible'
 
    viewport={{ once: true }} 

           className="request-quote-subheading page-subheading">
          <motion.p variants={childContainer}>  Tell us about your project and we'll prepare a tailored quote that suits your needs. At Bespoke, every creation is unique, so we'll work closely with you to bring your vision to life.
</motion.p>

           </motion.div>

            </motion.div>
<RequestQuoteForm/>

   
    </div>
  );
}