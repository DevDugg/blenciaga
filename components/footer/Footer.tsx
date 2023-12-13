import Container from "../Container";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <footer className="footer bg-GRAY max-md:mb-[66.4px]">
      <Container>
        <FooterTop />
        <div className="border-BLACK border-t border-solid">
          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
