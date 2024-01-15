import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import img1 from '../assets/img/project-img1.jpeg'

export const Content = () => {
    const { t } = useTranslation();
    useEffect(()=>{
      Aos.init();
    },[])

    return (
          
      <Container className="ContentContainer">
        <div data-aos="fade-left" >
          <Row>
            <Col className="left">
              <img src={img1} alt="placeHolderContent1"></img>
            </Col>
            <Col className="right">
              <div className="gif1">
                <div>
                  <h4>{t('contentHead1')}</h4>
                  <span>{t('content1')}</span>
                </div>
                </div>
            </Col>
          </Row>
        </div>
      </Container>
      
    );
        
}
