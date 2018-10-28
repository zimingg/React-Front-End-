import React from 'react';
import p3 from '../image/3.png';
import p4 from '../image/4.png';
import p5 from '../image/5.png';
import p6 from '../image/6.png';


//part four in Reactor page
const Picture = () => {
    return (
        <section id='picture' className="draw-boarder">
            <h3 className="div-width ">Maui By Air The Best Way Around The Island</h3>

            <div className='pic-col'>
                <div className='pic-container '>
                    <div>
                        <img  className="show-image" src={p3} alt={"alt"}/>
                    </div>

                    <div className="show-contain ">
                        <h4 className="  div-width ">East Josianefurt</h4>

                        <p className="  div-width caption ">085 Daron Via</p>
                    </div>
                </div>

                <div className='pic-container'>
                    <div>
                        <img  className="show-image" src={p4} alt={"alt"} />
                    </div>

                    <div className="show-contain ">
                        <h4 className="  div-width ">South Cristopherport</h4>

                        <p className="  div-width caption">162 Chandier Ville</p>
                    </div>
                </div>


                <div className='pic-container'>
                    <div>
                        <img  className="show-image" src={p5} alt={"alt"} />
                    </div>

                    <div className="show-contain ">
                        <h4 className="  div-width ">Concepcionbury</h4>

                        <p className="  div-width caption">7643 Kylle Burgs</p>
                    </div>
                </div>

                <div className='pic-container'>
                    <div>
                        <img  className="show-image" src={p6} alt={"alt"} />
                    </div>

                    <div className="show-contain ">
                        <h4 className="div-width ">Reychester</h4>

                        <p className="div-width caption">5590 Gabe Views Apt. 044</p>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Picture;