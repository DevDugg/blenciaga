import Container from "../Container";
import profile from "@/settings/data/profile.data";

const FooterBottom = () => {
  const fullYear = new Date().getFullYear();
  return (
    <section className="footer-bottom">
      <Container className="flex items-center justify-center border-t border-solid border-BLACK py-4">
        © {fullYear} {profile.name}
      </Container>
    </section>
  );
};
export default FooterBottom;
