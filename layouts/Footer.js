const Footer = () => {
  return (
    <footer>
      <div className="soc">
        <a target="_blank" href="https://twitter.com/llanoscamilo">
          <span className="ion ion-social-twitter" />
        </a>
        <a target="_blank" href="https://github.com/salsallanos">
          <span className="ion ion-social-github" />
        </a>
        <a target="_blank" href="https://www.instagram.com/camilollanos1/">
          <span className="ion ion-social-instagram-outline" />
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
