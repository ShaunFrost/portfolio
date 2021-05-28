import React from 'react';
import image from '../images/coder.jpg'

function About() {
    return (
        <div className="about" id="about">
            <div class="about-model">
                <img src={image} alt="model" />
                <p>Photo by <a href="https://www.pexels.com/@kevin-ku-92347?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels" target = "_blank">Kevin Ku</a> from Pexels</p>
            </div>
            <div class="about-text">
                <h2>About Me</h2>
                <h3>I'm a Graduate student at <span style={{ color: '#000266' }}>Pennsylvania State University</span></h3>
                <p>I served as an Instructional Assistanct for IST 311: Object Oriented Design course for Spring 2020 and a Teaching Assistant for CMPSC 360: Discrete Mathematics course for Fall 2020 and Spring 2021.</p>
                <p>Prior to my masters journey, I have worked as a Software Developer for Verizon India building critical customer facing applications. I predominantly worked on Java, Cassandra(NoSQL) and Oracle databases. I use C++ as my weapon of choice when coding competetively.</p>
                {/*<button>View More Details</button>*/}
            </div>
        </div>
    )
}

export default About