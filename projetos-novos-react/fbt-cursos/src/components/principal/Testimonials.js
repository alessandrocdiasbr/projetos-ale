import React from "react";
import testimonials1 from "../../images/testimonials1.png"
import testimonials2 from "../../images/testimoniasl2.png"
import testimonials3 from "../../images/testimonials3.png"

export default function Testimonials() {
    return (
        <>
        <div className="testimonials-box">
            <h2 className="heading">Quem ja participou, opinou!</h2>

            <div className="wrapper">
                <div className="testimonial-item">
                    <img src={testimonials1} alt=""/>
                    <h2>Mathew</h2>
                    <div className="rating">
                        <i className='bx bxs-star' id="star"></i>
                        <i className='bx bxs-star' id="star"></i>
                        <i className='bx bxs-star' id="star"></i>
                        <i className='bx bxs-star' id="star"></i>
                        <i className='bx bxs-star' id="star"></i>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur dicta, accusantium sit
                        delectus quod saepe, maxime eveniet est vitae sint assumenda quo. Voluptate, maxime nobis totam
                        hic odio nemo!"</p>
                </div>

                <div className="testimonial-item">
                    <img src={testimonials3}
                        alt=""/>
                    <h2>Tommy</h2>
                    <div className="rating">
                        <i className='bx bxs-star' id="star"></i>
                        <i className='bx bxs-star' id="star"></i>
                        <i className='bx bxs-star' id="star"></i>
                        <i className='bx bxs-star' id="star"></i>
                        <i className='bx bxs-star' id="star"></i>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur dicta, accusantium sit
                        delectus quod saepe, maxime eveniet est vitae sint assumenda quo. Voluptate, maxime nobis totam
                        hic odio nemo!"</p>
                </div>

                <div className="testimonial-item">
                    <img src={testimonials2} alt=""/>
                    <h2>Maggie</h2>
                    <div className="rating">
                        <i className='bx bxs-star' id="star"></i>
                        <i className='bx bxs-star' id="star"></i>
                        <i className='bx bxs-star' id="star"></i>
                        <i className='bx bxs-star' id="star"></i>
                        <i className='bx bxs-star' id="star"></i>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tenetur dicta, accusantium sit
                        delectus quod saepe, maxime eveniet est vitae sint assumenda quo. Voluptate, maxime nobis totam
                        hic odio nemo!"</p>
                </div>
            </div>
        </div>
        </>
    )
}