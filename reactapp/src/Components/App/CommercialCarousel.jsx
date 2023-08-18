import React from 'react';
import Bild from '../../Images/svtbild.png';

function Carousel() {
    return (
    
        <div class="col">
            <div class="ad-carousel">
                <div id="adContainer" class="ad-container">
                    <a href="http://www.cocacola.com"><img src="Pictures/ad1.png" alt="Coca Cola Ad"></a>
                    <a href="http://www.fanta.com"> <img src="Pictures/ad2.jpg" alt="Fanta Ad"></a>
                    <a href="http://www.sprite.com"> <img src="Pictures/ad3.png" alt="Sprite Ad"></a>
                    <a href="http://www.drpepper.com"><img src="Pictures/ad4.jpg" alt="Dr Pepper Ad"></a>
                </div>
            </div>
        </div>


 
        var carousel = document.getElementById('adContainer');
    carousel.addEventListener("mouseenter", function () {
        carousel.style.animationPlayState = "paused";
    });
    carousel.addEventListener('mouseleave', function () {
        carousel.style.animationPlayState = 'running';
    });
                    
 
    
    )
}
export default Carousel;


