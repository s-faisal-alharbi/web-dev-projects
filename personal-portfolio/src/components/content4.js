import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import IMAGES from '../assets/img/index'
import { useTranslation } from 'react-i18next';
import Aos from "aos";

import img1 from '../assets/img/project-img1.jpeg'

export const Content4 = () => {
    const { t } = useTranslation();

    return (
        // <TrackVisibility>
        //    {({ isVisible }) => ( <div className={ isVisible ? "animate__animated animate__fadeInLeft" : ""}> 
              
      <Container className="ContentContainer">
        <Row>
          <Col className="right">
            <div>
                <h4>{t('contentHead4')}</h4>
            <span>{t('content4')}</span>
            </div>
          </Col>
          {/* <img src={img1} alt="placeHolderContent4"></img> */}
          <img loading="lazy" alt="zood" data-aos="fade-up" data-aos-delay="60" data-aos-duration="1500" src="https://res.cloudinary.com/di11ome0s/image/upload/q_40,f_auto/v1702894033/zood/tje6mughhgfvazrshewp.webp" class="chief__section__img aos-init aos-animate"></img>
        </Row>
      </Container>
      // {/* </div> )}
      //   </TrackVisibility>  */}
    );
        
}
