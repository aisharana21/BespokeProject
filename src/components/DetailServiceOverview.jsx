import './CSS/DefaultStyle/card.css';
import { detailServiceData } from './data/detailServiceData.js';
import './CSS/DefaultStyle/detail-overview.css';
import './CSS/DefaultStyle/react-paginate.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
export function DetailServiceOverview() {
  
const detailPerPage =4;
const [pageNumber, setPageNumber]= useState(0);
const detailDisplayed = pageNumber*detailPerPage;
const detailEndDisplay = detailDisplayed+detailPerPage;
const displayDetail = detailServiceData.slice(detailDisplayed,detailEndDisplay);
const pageCount = Math.ceil(detailServiceData.length/detailPerPage);

//by pagination data.selected is given. destructured selected
const pageChange =({selected})=>{
setPageNumber(selected);
}
  return (
    <div className="detail-service-overview-container
     detail-overview-container" >
      <div className="detail-service-overview 
      detail-overview">
         {displayDetail.map((data, index) => (
          <motion.div

            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            key={index} className="service-detail detail">

            {index % 2 === 0 ? (
              <>
                <div className="service-img detail-img ">
                  <img src={data.image} alt={data.name} />
                </div>
                <div className="service-detail-description
                detail-description ">
                  <div className="service-heading detail-heading">
                    <h2>{data.name}</h2>
                  </div>
                  <div className="service-subheading
                  detail-subheading ">{data.heading}
                  </div>
                    <div className="detail-list services-detail-list">
                    <h3>Our Focus</h3>
                     <ul>
                    {data.list.map((listData,index) => (
                      <li key={index} >{listData}</li>
                    ))}
                  </ul>
                  </div>
                </div>
              </>
            ) : (
              <> 

                <div className="service-detail-description
                detail-description ">
                  <div className="service-heading detail-heading">
                    <h2>{data.name}</h2>
                  </div>
                  <div className="service-subheading
                  detail-subheading ">{data.heading}</div>
                    <div className="detail-list services-detail-list">
                    <h3>Our Focus</h3>
                     <ul >
                    {data.list.map((listData,i) => (
                      <li key={i}>{listData}</li>
                    ))}
                  </ul>
                  </div>

                </div>

                <div className="service-img detail-img ">
                  <img src={data.image} alt={data.name} />
                </div>
              </>
            )}
          </motion.div>
        ))} 
        <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={pageChange}
        containerClassName='pagination-bttn'
        previousLinkClassName='previous'
        nextLinkClassName='next'
        disabledClassName='pagination-disabled'
        activeClassName='pagination-active'
        />
       
      </div>
    </div>
  );
}


