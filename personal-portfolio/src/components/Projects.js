import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.jpeg";
import projImg4 from "../assets/img/project-img4.jpeg";
import projImg5 from "../assets/img/project-img5.jpeg";
import projImg6 from "../assets/img/project-img6.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from 'react-i18next'


export const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("ProjTitle1"),
      description: t("ProjDesc1"),
      imgUrl: projImg1,
    },
    {
      title: t("ProjTitle2"),
      description: t("ProjDesc2"),
      imgUrl: projImg2,
    },
    {
      title: t("ProjTitle3"),
      description: t("ProjDesc3"),
      imgUrl: projImg3,
    },
    {
      title: t("ProjTitle4"),
      description: t("ProjDesc4"),
      imgUrl: projImg4,
    },
    {
      title: t("ProjTitle5"),
      description: t("ProjDesc5"),
      imgUrl: projImg5,
    },
    {
      title: t("ProjTitle6"),
      description: t("ProjDesc6"),
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{t("Projects")}</h2>
                <p>{t('ProjPrg')}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>{t('ProjTab2Prg')}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>{t('ProjTab3Prg')}</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
