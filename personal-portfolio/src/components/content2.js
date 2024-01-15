import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import IMAGES from '../assets/img/index'
import { useTranslation } from 'react-i18next';

import img1 from '../assets/img/project-img1.jpeg'

export const Content2 = () => {
    const { t } = useTranslation();

    return (
        <TrackVisibility>
           {({ isVisible }) => ( <div className={ isVisible ? "animate__animated animate__fadeInLeft" : ""}> 
              
      <Container className="ContentContainer">
        <Row>
         
          <Col className="right">
            <div>
                <h4>{t('contentHead2')}</h4>
            <span>{t('content2')}</span>
            </div>
            
          </Col>
          <Col className="left">
         <img src={img1} alt="placeHolderContent2"></img>
        
                
         
          </Col>
        </Row>
      </Container>
      </div> )}
        </TrackVisibility> 
    );
        
}
