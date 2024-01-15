import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import img1 from '../assets/img/project-img1.jpeg'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const Content3 = () => {
    const { t } = useTranslation();
    useEffect(()=>{
      Aos.init();
    },[])

    return (
      <Container>
        <Row>
          <Col>
          
      <div className="content3">
        <div class="chief__section">
          <div class="chief__section__container">
            <div class="chief__section__heading">
              <span data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" class="aos-init aos-animate">Chief Executive Officer </span>
              </div>
              <div class="chief__section__text aos-init aos-animate" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1500">
                <span data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" class="aos-init aos-animate">Our strength lies in the strategic partnerships we built through </span>
                <span data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" class="aos-init aos-animate">our combined expertise, our ability to create opportunities, and our </span>
                <span data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="aos-init aos-animate">unique understanding of the market needs, consequently allowing us to </span>
                <span data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" class="aos-init aos-animate">deliver the highest possible value for ZOOD Real Estate and </span>
                <span data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" class="aos-init aos-animate">its partners.
      </span>
      </div>
      <img loading="lazy" alt="zood" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1500" src="https://res.cloudinary.com/di11ome0s/image/upload/q_40,f_auto/v1702894033/zood/tje6mughhgfvazrshewp.webp" 
      class="chief__section__img aos-init aos-animate"></img>
      </div></div></div>  
      </Col>
        </Row>
      </Container>
    );
        
}
