import React from 'react'
import { portfolioData } from './data/portfolioData';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ProjectDetail } from './ProjectDetail';
import { NavLink } from 'react-router-dom';
import './CSS/portfolio.css';
import './CSS/DefaultStyle/detail-overview.css';
import './CSS/DefaultStyle/react-paginate.css';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';


export  function PortfolioOverview() {
const projectPerPage= 4;
const [pageNumber, setPageNumber]= useState(0);
const projectDisplayed= projectPerPage * pageNumber;
const projectEndDisplay = projectDisplayed + projectPerPage;
const displayProject = portfolioData.slice(projectDisplayed, projectEndDisplay);


const pageCount = Math.ceil(portfolioData.length/projectPerPage);

//by pagination data.selected is given. destructured selected
const pageChange =({selected})=>{
setPageNumber(selected);
}

  return (
     <div className="portfolio-overview-container 
            detail-overview-conatiner">
                <div className="portfolio-overview detail-overview">
                    {displayProject.map((data, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            key={index} className="portfolio-detail 
                        detail
                        ">

                            {index % 2 === 0 ? (
                                <>
                                    <div className="portfolio-img 
                                    detail-img">
                                        <img src={data.image} alt={data.name} />
                                    </div>
                                    <div

                                        className="portfolio-detail-description 
                                    detail-description">
                                        <div className="portfolio-heading detail-heading">
                                            <h2>{data.name}</h2>
                                        </div>
                                        <div className="portfolio-subheading detail-subheading">{data.heading}</div>

                                        <div className="view-project-button">
                                            <NavLink to={`/portfolio/${data.id}`} className='link-style'><button> View Project</button></NavLink>
                                        </div>
                                    </div>


                                </>
                            ) : (
                                <>

                                    <div


                                        className="portfolio-detail-description 
                                    detail-description">
                                        <div className="portfolio-heading detail-heading">
                                            <h2>{data.name}</h2>
                                        </div>
                                        <div className="portfolio-subheading detail-subheading">{data.heading}</div>

                                        <div className="view-project-button">
                                            <NavLink to={`/portfolio/${data.id}`} className='link-style'><button> View Project</button></NavLink>
                                        </div>
                                    </div>
                                    <div className="portfolio-img 
                                    detail-img">
                                        <img src={data.image} alt={data.name} />
                                    </div>

                                </>
                            )}
                        </motion.div>
                        
                    ))}
                </div>
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
  )
}
