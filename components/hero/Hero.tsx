import Container from "../Container";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <Container className="w-full max-h-[530px]">
        <Image src={"/hero.jpg"} alt="Hero Image" width={1920} height={533} className="object-cover w-full h-full" />
      </Container>
    </section>
  );
};
export default Hero;
