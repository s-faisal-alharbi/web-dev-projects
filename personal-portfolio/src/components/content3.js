import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import IMAGES from '../assets/img/index'
import { useTranslation } from 'react-i18next';

import img1 from '../assets/img/project-img1.jpeg'

export const Content3 = () => {
    const { t } = useTranslation();

    return (
        <TrackVisibility>
           {({ isVisible }) => ( <div className={ isVisible ? "animate__animated animate__fadeInLeft" : ""}> 
              
      <Container className="ContentContainer">
        <Row>
        <img src={img1} alt="placeHolderContent3"></img>
         
          <Col className="right">
            <div>
                <h4>{t('contentHead3')}</h4>
            <span>{t('content3')}</span>
            </div>
            
          </Col>
         
        </Row>
      </Container>
      </div> )}
        </TrackVisibility> 
    );
        
}
