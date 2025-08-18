import { useParams } from "react-router-dom";
import { projectDetailData } from "./data/projectDetailData";
import { ProjectDetailOverview } from "./ProjectDetailOverview";
import './CSS/DefaultStyle/page-heading.css';
import { ProjectDetailOverviewFeatureCard } from './ProjectDetailOverviewFeatureCard';

export function ProjectDetail(){
     const { projectid } = useParams();
 const project =  projectDetailData.find((data)=> data.id===projectid)



return project ? (
  <div className="project-detail-container">
 <div className="project-detail-description page-heading-description">
           <div className="project-detail-heading page-heading">
            <h2>{project.name}</h2>
            <h3>{project.catagory}
</h3>
           </div>
           <div className="project-detail-subheading page-subheading">
            {project.description}

           </div>
            </div>
            <ProjectDetailOverview project={project}/>
<ProjectDetailOverviewFeatureCard project={project} />
  </div>
) : (
  <div>Project not found</div>
);

}