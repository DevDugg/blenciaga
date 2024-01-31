import Container from "../Container";

interface IProps {
  title: string;
}
const HeaderBottom = ({ title }: IProps) => {
  return title ? (
    <section className="header-bottom">
      <Container className="py-[72px] px-3 flex items-center justify-center border-b border-solid border-BLACK">
        <div className="text-BLACK text-xl w-fit uppercase font-bold" dangerouslySetInnerHTML={{ __html: title }}></div>
      </Container>
    </section>
  ) : null;
};
export default HeaderBottom;
