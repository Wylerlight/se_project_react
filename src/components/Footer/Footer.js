import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer">
      <p className="footer__name">Developed by: Tyler Tellez</p>
      <p className="footer__year">{currentYear}</p>
    </section>
  );
};

export default Footer;
