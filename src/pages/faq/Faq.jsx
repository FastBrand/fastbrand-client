import FaqAccordion from "../../components/faqAccordion/FaqAccordion";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Title, FAQContainer } from "./FaqStyles";

const Faq = () => {
  return (
    <>
      <FAQContainer>
        <Navbar backgroundColor="white" />
        <Title>자주하는질문</Title>
        <FaqAccordion />
      </FAQContainer>
      <Footer />
    </>
  );
};
export default Faq;
