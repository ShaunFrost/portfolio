import React from 'react';

function Cards(props) {
    return (
        <div className="project-box">
            <h2>{props.projectName}</h2>
            <div className="project-description">
                <p>{props.description}</p>
            </div>
            <div className="project-link">
                <a href={props.gitLink} target="_blank">{props.linkName}</a>
            </div>
        </div>
    )
}

export default Cards