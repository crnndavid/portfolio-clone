import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import BoxImages from "./components/BoxImages";
import BoxText from "./components/BoxText";
import BoxStats from "./components/BoxStats";
import BoxDomain from "./components/BoxDomain";

import box1 from "./assets/img/box-1.jpeg";
import box2 from "./assets/img/box-2.jpeg";
import box3 from "./assets/img/box-3.jpeg";
import icon1 from "./assets/img/icon-brand.svg";
import icon2 from "./assets/img/icon-webdesign.svg";
import icon3 from "./assets/img/icon-graphicdesign.svg";
import BoxReview from "./components/BoxReview";

function App() {
  const hoverStyles = ["#e3e1d3", "#e0cece", "#d1d7e0"];
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row className="mt-4">
        <Col>
          <BoxImages img={box1} />
        </Col>
        <Col>
          <BoxText
            title_l1="Creative"
            title_l2="& fresh"
            subtitle="Our digital agency"
            description="Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement."
            btnTxt="View portfolio"
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <BoxText
            title_l1="Hip"
            title_l2="& Funky"
            subtitle="We try new things"
            btnTxt="Our services"
            description="Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement."
          />
        </Col>
        <Col>
          <BoxImages img={box2} />
        </Col>
      </Row>
      <Row>
        <BoxStats />
      </Row>
      <Row>
        <Col>
          <BoxImages img={box3} />
        </Col>
        <Col>
          <BoxText
            title_l1="Things"
            title_l2="we do"
            subtitle="We exist to create"
            description="Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement."
            btnTxt="Get in touch"
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <BoxDomain
            img={icon1}
            bgOnHover={hoverStyles[0]}
            title="Branding"
            description="Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement."
          />
        </Col>
        <Col>
          <BoxDomain
            img={icon2}
            bgOnHover={hoverStyles[1]}
            title="Web Design"
            description="Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement."
          />
        </Col>
        <Col>
          <BoxDomain
            img={icon3}
            bgOnHover={hoverStyles[2]}
            title="Graphic Design"
            description="Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement."
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <BoxReview
            title1="Our clients"
            title2="love our work"
            subtitle="But don't just take our word for it..."
            citation="“I don’t like people, but I make an exception for ABC Agency. They’re pretty damn cool.”"
            author="Brian Jones,  America Big Corporation"
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
