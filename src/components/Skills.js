import { Container, Row , Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter2.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>I am very Confident and Motivated Person. Over the period of time i have build my Skillset adding knowledge from various feilds. My Skillset involves Front-End and Back-End Development in which I have specialized in MongoDB, Node.JS, Express.JS , React.JS. I have advance knowledge of C++ and Python and I am good in DSA. I am currently studying Machine Learning. I am fluent in English , Hindi & Gujrati languages and I can also write Arabic Language. I have good Leadership Qualities and always work smart. </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                    <h5>FrontEnd Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>MERN Stack</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>
                                    <h5>Data Structures</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                    <h5>Machine Learning</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                    <h5>Leadership Skills</h5>
                                </div> 
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                    <h5>English Comms</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}