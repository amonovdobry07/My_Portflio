import "./Portfolio.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";
import Img4 from "../../assets/portfolio4.jpg";
import Img5 from "../../assets/portfolio5.png";
import Img6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="partfolio">
      <h5>My React Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>

          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">
              {" "}
              Github{" "}
            </a>
            <a
              href="https://capable-swan-502834.netlify.app/"
              className="btn btn-primary"
              target="__blank"
            >
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>

        {/* 2 */}

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>

          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">
              {" "}
              Github{" "}
            </a>
            <a
              href="https://about-me-oga.netlify.app/"
              className="btn btn-primary"
              target="__blank"
            >
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>

        {/* 3 */}

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>

          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">
              {" "}
              Github{" "}
            </a>
            <a
              href="https://68f4cb9b2c853cf856ff6045--timely-pika-5cdb1b.netlify.app/"
              className="btn btn-primary"
              target="__blank"
            >
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>

        {/* 4 */}

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>

          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">
              {" "}
              Github{" "}
            </a>
            <a
              href="https://moonlit-marshmallow-f6cae6.netlify.app/"
              className="btn btn-primary"
              target="__blank"
            >
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>

        {/* 5 */}

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>

          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">
              {" "}
              Github{" "}
            </a>
            <a
              href="https://68f4cc532e8a87f622d5e769--graceful-puppy-5aba1a.netlify.app/"
              className="btn btn-primary"
              target="__blank"
            >
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>

        {/* 6 */}

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Img6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>

          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="__blank">
              {" "}
              Github{" "}
            </a>
            <a
              href="https://sunny-moxie-920949.netlify.app/"
              className="btn btn-primary"
              target="__blank"
            >
              {" "}
              Live Demo{" "}
            </a>
          </div>
          
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
