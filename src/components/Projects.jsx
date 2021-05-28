import React from 'react';
import Cards from './Card/Cards';
import CardDetails from './Card/CardDetails';
function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="projects-heading">
                <h1>Projects</h1>
                <p>Check out some of my work!</p>
                <p>My GitHub: <a href="https://github.com/ShaunFrost" target="_blank">https://github.com/ShaunFrost</a></p>
            </div>
            <div className="project-container">
                <Cards projectName={CardDetails[0].projectName} description={CardDetails[0].description} gitLink={CardDetails[0].gitLink} linkName={CardDetails[0].linkName} />
                <Cards projectName={CardDetails[1].projectName} description={CardDetails[1].description} gitLink={CardDetails[1].gitLink} linkName={CardDetails[1].linkName} />
                <Cards projectName={CardDetails[2].projectName} description={CardDetails[2].description} gitLink={CardDetails[2].gitLink} linkName={CardDetails[2].linkName} />
                <Cards projectName={CardDetails[3].projectName} description={CardDetails[3].description} gitLink={CardDetails[3].gitLink} linkName={CardDetails[3].linkName} />
            </div>
        </div>
    )
}

export default Projects