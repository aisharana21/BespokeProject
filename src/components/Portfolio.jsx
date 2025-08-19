import ManImage from '../assets/man.png';
import './CSS/DefaultStyle/hero-section.css';
import './CSS/portfolio.css';
import WebDevelopmet from '../assets/web.jpg';
import UI from '../assets/uiwork.jpg';
import CorporateBranding from '../assets/corporatebrandingkit.jpg';
import { ProjectDetail } from './ProjectDetail';
import { NavLink } from 'react-router-dom';
import './CSS/DefaultStyle/detail-overview.css';
import { motion } from 'framer-motion';


export function Portfolio() {
    const portfolioData = [
        {
            id: "20250730-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
            image: UI,
            name: " Elegant Interior Design Website",
            heading:
                "A minimal yet luxurious website for a high-end interior design firm, focusing on elegance and ease of navigation.",

        },
        {
            id: "20250731-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",

            image: WebDevelopmet,
            name: "Fashion E-commerce Platform",
            heading:
                " A bespoke online store for a premium clothing brand with a focus on user experience and product storytelling.",

        },
        {
            id: "20250732-9f3a72c4b8e54d7a91c1f65d4e8b3a2f",
            image: CorporateBranding,
            name: "Corporate Branding Kit",
            heading:
                " A full branding solution for a corporate client, from logo design to marketing materials.",

        }
    ];
    return (
        <div className="portfolio-container">
            <div className="hero-section">
                <motion.div
                initial={{ opacity: 0, x: -100 }}   
  whileInView={{ opacity: 1, x: 0 }} 
  transition={{  duration: 1, ease: "easeOut" }}
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
            <div className="portfolio-overview-container 
            detail-overview-conatiner">
                <div className="portfolio-overview detail-overview">
                    {portfolioData.map((data, index) => (
                        <div key={index} className="portfolio-detail 
                        detail
                        ">

                            {index % 2 === 0 ? (
                                <>
                                    <div className="portfolio-img 
                                    detail-img">
                                        <img src={data.image} alt={data.name} />
                                    </div>
                                    <motion.div 
                                    initial={{opacity:0 ,scale: 0.8}}
    whileInView={{opacity:1,scale: 1}}
    transition={{ duration:1, ease: "easeOut"}}
    viewport={{ once: true }}
                                    className="portfolio-detail-description 
                                    detail-description">
                                        <div className="portfolio-heading detail-heading">
                                            <h2>{data.name}</h2>
                                        </div>
                                        <div className="portfolio-subheading detail-subheading">{data.heading}</div>
                                        
                                        <div className="view-project-button">
                                            <NavLink to={`/portfolio/${data.id}`} className='link-style'><button> View Project</button></NavLink>
                                        </div>
                                    </motion.div>
                                

                                </>
                            ) : (
                                <>
                                     
                                    <motion.div
                                    initial={{opacity:0 ,scale: 0.8}}
    whileInView={{opacity:1,scale: 1}}
    transition={{delay:0.3, duration:1, ease: "easeOut"}}
    viewport={{ once: true }}
                                    
                                    className="portfolio-detail-description 
                                    detail-description">
                                        <div className="portfolio-heading detail-heading">
                                            <h2>{data.name}</h2>
                                        </div>
                                        <div className="portfolio-subheading detail-subheading">{data.heading}</div>
                                        
                                        <div className="view-project-button">
                                            <NavLink to={`/portfolio/${data.id}`} className='link-style'><button> View Project</button></NavLink>
                                        </div>
                                    </motion.div>
                                      <div className="portfolio-img 
                                    detail-img">
                                        <img src={data.image} alt={data.name} />
                                    </div>
                                    {console.log(index)}

                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}