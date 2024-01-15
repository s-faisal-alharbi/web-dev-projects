import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import img1 from '../assets/img/project-img1.jpeg'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

export const Content2 = () => {
    const { t } = useTranslation();
    useEffect(()=>{
      Aos.init();
    },[])

    return (
         
      <Container className="ContentContainer">
        <div data-aos="fade-right" >
        <Row>         
          <Col className="right">
          <div className="gif2">
            <div>
                <h4>{t('contentHead2')}</h4>
            <span>{t('content2')}</span>
            </div> 
            </div>           
          </Col>
          <Col className="left">
            <img src={img1} alt="placeHolderContent2"></img>             
          </Col>
        </Row>
        </div>
      </Container>
     
    );
        
}
