import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import IMAGES from '../assets/img/index'
import { useTranslation } from 'react-i18next';

import img1 from '../assets/img/project-img1.jpeg'

export const Content = () => {
    const { t } = useTranslation();

    return (
        <TrackVisibility>
           {({ isVisible }) => ( <div className={ isVisible ? "animate__animated animate__fadeInLeft" : ""}> 
              
      <Container className="ContentContainer">
        <Row>
         <Col className="left">
         <img src={img1} alt="placeHolderContent1"></img>
        
                
         
          </Col>
          <Col className="right">
            <div>
                <h4>{t('contentHead1')}</h4>
            <span>{t('content1')}</span>
            </div>
            
          </Col>
         
        </Row>
      </Container>
      </div> )}
        </TrackVisibility> 
    );
        
}
