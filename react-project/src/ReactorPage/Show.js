import React from 'react';
import p1 from '../image/1.png';
import p2 from '../image/2.png';

//part three in Reactor page
const Show = () => {
    return (
        <section id='show' className="mark">


<div className="show-big-contain">
            <div className='show-container '>
                <div>
                    <img  className="show-image-shadow" src={p1} alt={"alt"} />
                </div>

                <div className="show-contain top">
                    <h4 className="  show-div-width top">Regional Cuisine Down Home Southern Cooking</h4>

                    <p className="  show-div-width ">The quick, brown fox jumps over a lazy dog.
                        DJs flock by when MTV ax quiz prog.
                        Junk MTV quiz graced by fox whelps.
                        Bawds jog. flick quartz, vex nymphs.</p>
                </div>


            </div>

            <div className='show-container'>
                <div>
                    <img  className="show-image-shadow" src={p2} alt={"alt"}/>
                </div>

                <div className="show-contain top">
                    <h4 className="  show-div-width top">Pos Hardware More Options in Less Space</h4>

                    <p className="  show-div-width ">The quick, brown fox jumps over a lazy dog.
                        DJs flock by when MTV ax quiz prog.
                        Junk MTV quiz graced by fox whelps.
                        Bawds jog. flick quartz, vex nymphs.</p>
                </div>
            </div>

</div>

        </section>
    );
};

export default Show;