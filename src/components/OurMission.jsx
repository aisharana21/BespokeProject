import './CSS/our-mission.css'
import {  motion } from "framer-motion";

export function OurMission(){
    return(
<div className="our-mission-container">
    <div className="our-mission-title">
        OUR MISSION
    </div>
    <motion.div
    initial={{opacity:0 ,scale: 0.8}}
    whileInView={{opacity:1,scale: 1}}
    transition={{delay:0.5, duration:1.5, ease: "easeOut"}}
    viewport={{ once: true }}

    className="about-our-mission">
        
             Bespoke is a premier design consultancy dedicated to helping companies create cutting-edge products that resonate deeply with their audiences. Our expert team blends innovative design with strategic insights to craft products that not only meet functional needs but also evoke powerful emotional connections. At Bespoke, we believe that the true measure of a product's success lies in its ability to move and inspire. Our mission is to transform your vision into reality, delivering products that stand out in the market and leave a lasting impression. Experience the future of product design.
        
 
    </motion.div>
</div>

    );

}