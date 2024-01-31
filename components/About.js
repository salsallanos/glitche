const About = () => {
  const getAge = (year, month, day) => {
    const birth = new Date(year, month - 1, day)
    const now = new Date()
    const diff = new Date(now.valueOf() - birth.valueOf())
    return Math.abs(diff.getFullYear() - 1970)
  }
  const years_old = new Date().getFullYear() - 1995;
  return (
    <div className="section about section_" id="section-resume">
      <div className="content">
        <div className="title">
          <div className="title_inner">About Me</div>
        </div>
        <div className="image">
          <img src="images/man1.jpg" alt="" />
        </div>
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
            vocent mediocritatem an, cule dicta iriure at. Ubique maluisset vel
            te, his dico vituperata ut. Pro ei phaedrum maluisset. Ex audire
            suavitate has, ei quodsi tacimates sapientem sed, pri zril ubique
            ut. Te cule tation munere noluisse. Enim torquatos ne pri, eum
            mollis salutandi corrumpit et, fugit apeirian duo ad.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Name:</strong> Camilo Llanos
              </li>
              <li>
                <strong>Age:</strong> {getAge(1995,7,27)} Years Old
              </li>
              <li>
                <strong>Job:</strong> Software Engineer
              </li>
              <li>
                <strong>Citizenship:</strong> United States
              </li>
              <li>
                <strong>Residence: </strong> Pembroke Pines, Florida
              </li>
              <li>
                <strong>E-mail:</strong> juanca2721@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn fill" data-text="Download CV">
              Download CV
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
