import './CSS/project-detail-feature-card.css';
// import { projectDetailData } from './data/projectDetailData';

export function ProjectDetailOverviewFeatureCard({project}){

  return(
    <div 
    className="project-detail-feature-card-container">
      <div className="feature-heading">
    <h2>Features</h2>
      </div>
  <div className="project-feature-card-grid">
{
 project.features.map((feature,index)=>(
    <div key={index} className="project-detail-feature-card">

  <p>{feature}</p>


    </div>
  ))
}
  </div>
    </div>
  );
}
