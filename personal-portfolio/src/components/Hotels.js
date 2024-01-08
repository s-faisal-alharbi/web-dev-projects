import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import hotel1 from "../assets/img/project-img1.jpeg"
import hotel2 from "../assets/img/project-img2.jpeg"
import hotel3 from "../assets/img/project-img3.jpeg"
import hotel4 from "../assets/img/project-img4.jpeg"
import hotel5 from "../assets/img/project-img5.jpeg"
import hotel6 from "../assets/img/project-img6.jpeg"
import { useTranslation } from 'react-i18next'


export const Hotels = () => {
    const { t } = useTranslation();
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        centeredSlides: true,
        initialSlide: 0,
        loop: true,
        autoplay: {
            delay: 5000,
          },
        
        pagination: {
            el: '.swiper-pagination',
            // dynamicBullets: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        
        },

        
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        observer: true, 
        observeParents: true
    });
    

    return (
        <section className="hotels" id="hotel">
            <div class="swiper">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <img src={hotel1} alt="slide1"></img>
                        <div class='swiper-slide-content'>
                            <div class='swiper-slide-title'>{t('hotel1 name')}</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img src={hotel2} alt="slide2"></img>
                        <div class='swiper-slide-content'>
                            <div class='swiper-slide-title'>{t('hotel2 name')}</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img src={hotel3} alt="slide3"></img>
                        <div class='swiper-slide-content'>
                            <div class='swiper-slide-title'>{t('hotel3 name')}</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img src={hotel1} alt="slide4"></img>
                        <div class='swiper-slide-content'>
                            <div class='swiper-slide-title'>{t('hotel4 name')}</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img src={hotel2} alt="slide5"></img>
                        <div class='swiper-slide-content'>
                            <div class='swiper-slide-title'>{t('hotel5 name')}</div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img src={hotel3} alt="slide6"></img>
                        <div class='swiper-slide-content'>
                            <div class='swiper-slide-title'>{t('hotel6 name')}</div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-scrollbar"></div>
            </div>
        </section >

    )
}
