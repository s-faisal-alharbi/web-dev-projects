import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { useTranslation } from 'react-i18next'

import hotel1 from "../assets/img/project-img1.jpeg"
import hotel2 from "../assets/img/project-img2.jpeg"
import hotel3 from "../assets/img/project-img3.jpeg"

// import hotel1 from "../assets/img/i1.jpeg"
// import hotel2 from "../assets/img/i2.jpeg"
// import hotel3 from "../assets/img/i3.jpeg"

// import hotel1 from "../assets/img/project-img5.jpeg"
// import hotel2 from "../assets/img/project-img6.jpeg"
// import hotel3 from "../assets/img/project-img4.jpeg"

// import hotel4 from "../assets/img/project-img5.jpeg"
// import hotel5 from "../assets/img/project-img6.jpeg"
// import hotel6 from "../assets/img/project-img4.jpeg"

export const HotelsGallery = () => {
    const { t } = useTranslation();
    
    var slider = new Swiper(".gallery-slider", {
        sliderPerView: 1,
        loop: true,
        noSwiping: true,
        noSwipingClass: "swiper-slide",
        pagination: {
            el: '.swiper-pagination',
            // dynamicBullets: true,
            clickable: true,
        
        },
        centeredSlide: true,
        observer: true, 
        observeParents: true,
        initialSlide: 1,
        // autoplay: {
        //     delay: 5000,
        //   },
    })
    var thumbs = new Swiper(".gallery-thumbs", {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlide: true,
        loop: true,
        slideToClickedSlide: true,
        observer: true, 
        observeParents: true,
        initialSlide: 1,
        
        
    })

    slider.controller.control = thumbs;
    thumbs.controller.control = slider;
    return (

        
        <section className="hotels" id="hotelGallery">
        
                        <div class='gallery'>
                            {/* <div class='content'>
                                <span>name : hotel1</span>
                                <h1>head</h1>
                                <p>othercontent</p>
                            </div> */}
                            <div class='swiper-container gallery-slider'>
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" sequence="1">
                                        <img src={hotel1} alt="slide1"></img>
                                        <div class='content'>
                                            <span>{t('hotel1 name')}</span>
                                            <h1>{t('hotel1Header')}</h1>
                                            <p>{t('othercontent1')}</p>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <img src={hotel2} alt="slide2"></img>
                                        <div class='content'>
                                            <span>{t('hotel2 name')}</span>
                                            <h1>{t('hotel2Header')}</h1>
                                            <p>{t('othercontent2')}</p>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <img src={hotel3} alt="slide3"></img>
                                        <div class='content'>
                                            <span>{t('hotel3 name')}</span>
                                            <h1>{t('hotel3Header')}</h1>
                                            <p>{t('othercontent3')}</p>
                                        </div>
                                    </div>
                                    {/* <div class="swiper-slide">
                                        <img src={hotel1} alt="slide4"></img><div class='content'>
                                            <span>{t('hotel4 name')}</span>
                                            <h1>{t('hotel4Header')}</h1>
                                            <p>{t('othercontent4')}</p>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <img src={hotel2} alt="slide5"></img><div class='content'>
                                            <span>{t('hotel5 name')}</span>
                                            <h1>{t('hotel5Header')}</h1>
                                            <p>{t('othercontent5')}</p>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <img src={hotel3} alt="slide6"></img><div class='content'>
                                            <span>{t('hotel6 name')}</span>
                                            <h1>{t('hotel6Header')}</h1>
                                            <p>{t('othercontent6')}</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div class='swiper-container gallery-thumbs'>
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <img src={hotel1} ></img>
                                    </div>
                                    <div class="swiper-slide">
                                        <img src={hotel2} ></img>
                                    </div>
                                    <div class="swiper-slide">
                                        <img src={hotel3}></img>
                                    </div>
                                    {/* <div class="swiper-slide">
                                        <img src={hotel1} alt="sli4"></img>
                                    </div>
                                    <div class="swiper-slide">
                                        <img src={hotel2} alt="sli5"></img>
                                    </div>
                                    <div class="swiper-slide">
                                        <img src={hotel3} alt="sli6"></img>
                                    </div> */}
                                </div>
                            </div>
                            {/* <div class="swiper-pagination"></div>
        
                            <div class="swiper-scrollbar"></div> */}
                        </div>
        </section >

    )
}
