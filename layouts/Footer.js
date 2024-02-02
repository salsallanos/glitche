const Footer = () => {
  return (
    <footer>
      <div className="soc">
        <a target="_blank" href="https://twitter.com/llanoscamilo" aria-label="Twitter Link">
          <span className="ion ion-social-twitter" />
        </a>
        <a target="_blank" href="https://github.com/salsallanos" aria-label="Github Link">
          <span className="ion ion-social-github" />
        </a>
        <a target="_blank" href="https://www.instagram.com/camilollanos1/" aria-label="Instagram Link">
          <span className="ion ion-social-instagram-outline" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/juan-camilo-llanos-68a698135/" aria-label="Linkedin Link">
          <span className="ion ion-social-linkedin" />
        </a>
      </div>
      <div className="copy">
        © {new Date().getFullYear()} Camilo Llanos. All rights reserved.
      </div>
      <div className="clr" />
    </footer>
  );
};
export default Footer;
