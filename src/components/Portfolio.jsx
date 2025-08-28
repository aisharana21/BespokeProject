import ManImage from '../assets/man.png';
import './CSS/DefaultStyle/hero-section.css';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { PortfolioOverview } from './PortfolioOverview';


export function Portfolio() {
const heroSectionVariant={
    hidden:{
        opacity:0,
        x: -100 
  },
    visible:{
opacity: 1,
 x: 0,
transition:{duration: 1, 
ease: "easeOut"
}

    }
}       
   
  
    return (
        <div className="portfolio-container">
            <div className="hero-section">
                <motion.div
                variants={heroSectionVariant}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className="portfolio-description
   hero-section-description
  ">
                    <div className="poortfolio-heading hero-section-heading">
                        <h2> Showcasing Our Bespoke
                            <span className='highlight'> Creations</span> </h2>
                    </div>
                    <div className="portfolio-subheading hero-section-subheading
  ">
                        At Bespoke, every project is a unique story crafted with precision, creativity, and innovation. From tailored designs to custom solutions, our work reflects our passion for excellence and our commitment to client satisfaction.

                    </div>

                </motion.div>
                <div className="portfolio-img hero-section-img">
                    <img src={ManImage} alt="" />
                </div>
            </div>
            <PortfolioOverview/>
            {/* <div className="portfolio-overview-container 
            detail-overview-conatiner">
                <div className="portfolio-overview detail-overview">
                    {portfolioData.map((data, index) => (
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
                                    {console.log(index)}

                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div> */}
        </div>

    );
}