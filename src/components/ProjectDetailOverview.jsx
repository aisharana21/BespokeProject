import './CSS/project-detail-overview.css';

export function ProjectDetailOverview({project}){

    return (
        <div className="project-detail-over-view-container">
           
           <div className="project-overview-grid">
            <div className="project-overview-description">
                <div className="project-overview-heading">
                   <h2>{project.name}</h2> 
                </div>
                <div className="project-overview-subheading">
                 {project. projectOverviewP1}
          

                </div>
                <div className="project-overview-subheading">
                 {project. projectOverviewP2}
          

                </div>
            </div>
            <div className="project-overview-img">
                <img src={project.image} alt="" />
            </div>
         

</div>
          
            </div>
    );
}