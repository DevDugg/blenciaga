import Container from "../Container";
import Image from "next/image";

interface IProps {
  image: string;
}

const Hero = ({ image }: IProps) => {
  return image ? (
    <section className="hero">
      <Container className="w-full max-h-[530px]">
        <Image src={image} alt="Hero Image" width={1920} height={533} className="object-cover w-full h-full" />
      </Container>
    </section>
  ) : null;
};
export default Hero;
