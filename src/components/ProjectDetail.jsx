import { useParams } from "react-router-dom";


import { ProjectDetailOverview } from "./ProjectDetailOverview";
import './CSS/DefaultStyle/page-heading.css';
import { ProjectDetailOverviewFeatureCard } from './ProjectDetailOverviewFeatureCard';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { projectDetailData } from "./data/projectDetailData";
export function ProjectDetail(){
     const { projectid } = useParams();
 const project =  projectDetailData.find((data)=> data.id===projectid)



return project ? (
  <div className="project-detail-container">
 <div className="project-detail-description page-heading-description">
           <div className="project-detail-heading page-heading">
            <motion.h2
                initial={{opacity:0 ,scale: 0.8}}
    whileInView={{opacity:1,scale: 1}}
    transition={{ duration:1, ease: "easeOut"}}
    viewport={{ once: true }}
            
            >{project.name}</motion.h2>
            <motion.h3
            
                initial={{opacity:0 ,scale: 0.8}}
    whileInView={{opacity:1,scale: 1}}
    transition={{delay:0.2, duration:1, ease: "easeOut"}}
    viewport={{ once: true }}
            >{project.catagory}
</motion.h3>
           </div>
           <motion.div
               initial={{opacity:0 ,scale: 0.8}}
    whileInView={{opacity:1,scale: 1}}
    transition={{delay:0.3, duration:1, ease: "easeOut"}}
    viewport={{ once: true }}
           
           className="project-detail-subheading page-subheading">
            {project.description}

           </motion.div>
            </div>
            <ProjectDetailOverview project={project}/>
<ProjectDetailOverviewFeatureCard project={project} />
  </div>
) : (
  <div>Project not found</div>
);

}