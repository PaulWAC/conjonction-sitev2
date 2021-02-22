import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

// Custom Content
import CitiesContent from "../../content/CitiesContent.json";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

// Custom components
const Timeline = lazy(() => import("../../components/Timeline"));
const CountUp = lazy(() => import("../../components/CountUp"));
const CitiesBlock = lazy(() => import("../../components/Cities"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="intro"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        highlight={IntroContent.highlight}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
      <Timeline/>
      <CountUp/>
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content_start={AboutContent.text_start}
        highlight={AboutContent.highlight}
        content_end={AboutContent.text_end}
        title2={AboutContent.title2}
        content2_start={AboutContent.text2_start}
        highlight2={AboutContent.highlight2}
        content2_end={AboutContent.text2_end}
        highlight3={AboutContent.highlight3}
        content2_end2={AboutContent.text2_end2}
        // section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        highlight={MissionContent.highlight}
        content={MissionContent.text}
        highlight2={MissionContent.highlight2}
        content2={MissionContent.text2}
        highlight3={MissionContent.highlight3}
        content3={MissionContent.text3}
        icon="product-launch.svg"
        id="mission"
      />
      <CitiesBlock
        type="city"
        ville={CitiesContent.ville}
        ville_description={CitiesContent.ville_description}
        ville2={CitiesContent.ville2}
        ville2_description={CitiesContent.ville2_description}
        ville3={CitiesContent.ville3}
        ville3_description={CitiesContent.ville3_description}
        icon="product-launch.svg"
      />
      <ContentBlock
        type="incub"
        title={ProductContent.title}
        content={ProductContent.text}
        highlight={ProductContent.highlight}
        icon="waving.svg"
        id="product"
      />
      <ContactFrom
        title={ContactContent.title}
        text_start={ContactContent.text_start}
        highlight={ContactContent.highlight}
        highlight2={ContactContent.highlight2}
        text_end={ContactContent.text_end}
        id="contact"
      />
    </Container>
  );
};

export default Home;
