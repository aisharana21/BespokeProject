import './CSS/DefaultStyle/page-heading.css';
import { RequestQuoteForm } from './RequestQuoteForm';
export function RequestQuote(){
  

  return (
    <div className="request-quote-container">       
          <div className="request-quote-description page-heading-description">
           <div className="request-quote-heading page-heading">
            <h2>Request a Quote
</h2>
            <h3>Your Vision, Our Expertise - Let's Create Together

</h3>
           </div>
           <div className="request-quote-subheading page-subheading">
            Tell us about your project and we'll prepare a tailored quote that suits your needs. At Bespoke, every creation is unique, so we'll work closely with you to bring your vision to life.


           </div>

            </div>
<RequestQuoteForm/>

   
    </div>
  );
}