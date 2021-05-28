import React from 'react';
import image from '../images/guitar.png'

function Hobbies() {
    return (
        <div className="hobbies" id="hobbies">
            <div class="about-model">
                <img src={image} alt="model" />
            </div>
            <div class="hobbies-text">
                <h2>Know Me Better</h2>
                <h3>In my free time, you'll find me <span style={{ color: '#000266' }}>sketching, playing my guitar, playing football or reading a book.</span></h3>
                <p>Currently reading: <span style={{ color: '#000266' }}><a href="https://www.goodreads.com/book/show/28789711-spqr" target="blank">SPQR</a> </span>: A history of ancient Rome by <span style={{ color: '#000266' }}>Mary Beard</span></p>
                <p>Checkout my guitar covers as I learn the art: <span style={{ color: '#000266' }}><a href="https://www.instagram.com/rash_strum/" target="blank">Covers</a> </span></p>
                <p>I am hardcore fan of Liverpool Football Club.</p>
                <p>I also watch Formula 1, NBA, Tennis and Cricket.</p>
            </div>
        </div>
    )
}

export default Hobbies