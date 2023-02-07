import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ShopCard } from './ShopCard';
import projImg1 from "../assets/img/project-img1.webp";
import projImg2 from "../assets/img/project-img2.webp";
import projImg3 from "../assets/img/project-img3.webp";
import projImg4 from "../assets/img/project-img4.webp";
import projImg5 from "../assets/img/project-img5.webp";
import projImg6 from "../assets/img/project-img6.webp";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Shops = () => {

  const shops = [
    {
      title: "Plant Based Reusable Cups ",
      description: " €2.39 ",
      imgUrl: projImg1,
    },
    {
      title: "Sustainability Starter Kit",
      description: " €10.99 ",
      imgUrl: projImg2,
    },
    {
      title: "Reusable Bamboo Straws",
      description: " €1.99 ",
      imgUrl: projImg3,
    },
    {
      title: "Natural Bamboo Loofah",
      description: " €2.99 ",
      imgUrl: projImg4,
    },
    {
      title: "Bamboo ToothBrush",
      description: " €3.59 ",
      imgUrl: projImg5,
    },
    {
      title: "Plant Based Reusable Containers",
      description: " Out of Stock ",
      imgUrl: projImg6,
    }

  ];

  return (
    <section className="project" id="shops">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="pad">Shop</h2>
                  <p> 
                    Enter Earthly, a spot for businesses that need to be a part of the green movement. We do an amazing job to give you the information and alternative sustainable products for your cafes and food business. Earthly has a fair trade policy for all business deals. You have the right to place orders for sustainable products that go with your budget and business. We’re endeavoring to set new principles, increase present expectations, and review what is useful for your business and our planet. Each move you make as a business is a chance to be better. When you shop at Earthly, you add to a superior future for every one of us. So now you know a superior method to shop sustainable products, and join the development beneath! We offer a variety of biodegradable options like biodegradable cups, biodegradable containers, organic toothbrushes and many more to choose from.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            shops.map((shop, index) => {
                              return (
                                <ShopCard
                                  key={index}
                                  {...shop}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

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
