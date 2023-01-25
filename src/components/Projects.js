import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "eDavaa",
      description: "Online Medicine Selling Website",
      imgUrl: projImg1,
    },
    {
      title: "Shhhare",
      description: "Anonymously Share Secrets",
      imgUrl: projImg2,
    },
    {
      title: "BlogIT",
      description: "Blog Website",
      imgUrl: projImg3,
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
                <h2>Projects</h2>
                <p>There are many different types of projects that can be done in the field of computer science, as the field is quite broad and encompasses many different sub-disciplines.Some Projects that I have build in my journey of BTech are presented here:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
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
                      <p><b>eDavaa:</b> It is a Website that sells Medicine online.Technology Used are HTML,CSS,JS [Frontend] and MongoDB,Node.JS,Express.JS,React.JS[Backend].</p><p>
                      <b>Shhhare:</b> A Full Backend Website that Using Node and Express and using MongoDB as DBMS.And in which user can log in through Gmail and other email services and share their Secrets anonymously.</p><p>
                      <b>BlogIT:</b>A Full Backend Website that records everyday blogging of the users using Node and Express and using MongoDB as DBMS.</p>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
