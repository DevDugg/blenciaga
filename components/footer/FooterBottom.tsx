import profile from "@/settings/data/profile.data";

const FooterBottom = () => {
  const fullYear = new Date().getFullYear();
  return (
    <section className="footer-bottom">
      <div className="flex items-center justify-center py-4 text-xs">
        © {fullYear} {profile.name}
      </div>
    </section>
  );
};
export default FooterBottom;
