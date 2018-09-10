import React from "react";
import { Link } from "react-router-dom";
import ImageZoom from "../image-zoom/ImageZoom";
import Promo from "../common/Promo";

const Genintra = () => {
  return (
    <div className="section section--portfolio">
      <div className="section__item section__item--header">
        <div className="container container--column">
          <h1>CODE.IT</h1>
          <p>Online learning platform for coding.</p>
          <ul className="skillset">
            <li>Product Design</li>
            <li>Front-end Development</li>
          </ul>
        </div>
      </div>
      <div className="section__item section__item--content">
        <div className="container container--column">
          <div className="context">
            <h1>CODE.IT</h1>
            <p>
              In 2017 my ex-partner and I were brainstorming about ideas for the
              domain Code.it. We were deciding between developing a cloud-based
              integrated development environment (IDE) for software developers
              or creating an online code-learning platform/academy. An IDE is a
              software suite that consolidates the basic tools developers need
              to write and test software. After spending two weeks conducting
              market research we chose to create the online code-learning
              platform. It would be quicker to create such a platform in a
              limited time rather than a cloud-based IDE and it would be simpler
              to scale it up when we could get great instructors.
            </p>
            <ImageZoom
              src="/images/codeit-1.jpg"
              imageName="codeit-1"
              alt="Homepage of code.it"
              noBorder
            />

            <p>
              Like many projects I have worked on before, first I created a
              mind-map by using the mind mapping tool, Freemind. A mind map is a
              graphical way to represent ideas and concepts. It is a visual
              thinking tool that helps in structuring information to better
              analyze, comprehend, synthesize, recall, and generate new ideas.
              Just as in every great idea, its power lies in its simplicity.
              Especially when you work remotely, mind-mapping makes it much
              easier to share your ideas and findings with your team-mates. The
              idea behind using the mind-mapping tool was that I could write
              down every possible idea, analysis, or feature that I gathered
              from my research or anything else that came to my mind.
            </p>

            <div className="image__wrapper image__wrapper--gallery">
              <div className="image__gallery__item image__gallery__item--left">
                <div className="image">
                  <ImageZoom
                    src="/images/codeit-2.jpg"
                    imageName="codeit-2"
                    alt="Freemind mind-mapping tool screenshot"
                  />
                </div>
              </div>
              <div className="image__gallery__item image__gallery__item--right">
                <div className="image">
                  <ImageZoom
                    src="/images/codeit-3.jpg"
                    imageName="codeit-3"
                    alt="Freemind mind-mapping tool screenshot"
                  />
                </div>

                <div className="image">
                  <ImageZoom
                    src="/images/codeit-4.jpg"
                    imageName="codeit-4"
                    alt="Freemind mind-mapping tool screenshot"
                  />
                </div>
                <div className="image">
                  <ImageZoom
                    src="/images/codeit-5.jpg"
                    imageName="codeit-5"
                    alt="Freemind mind-mapping tool screenshot"
                  />
                </div>
              </div>
              <figcaption>
                Freemind is an awesome free mind-mapping tool and I use it in
                almost every project.
              </figcaption>
            </div>
            <p>
              As soon as we finished mind mapping, my ex-partner and I used our
              mind map file to create the minimum viable product (MVP) features
              and created a roadmap for Code.it. The time frame was incredibly
              short, as I was expected to complete the functional prototypes
              within 2 weeks. Because of this short time period, I decided to
              create prototypes first and skip user research and wireframing (UX
              deliverables) all together in order to come up with functional
              prototypes faster. This is my approach to design and developing
              products when the time frame is extremely limited. I create the
              prototypes as fast as possible and then I start gathering user
              feedback and iterate the design with the feedback.
            </p>

            <p>
              In only 2 weeks, I created the following functional prototypes
              with the mobile-first approach by using only HTML, CSS and
              Javascript.
            </p>

            <h3>LANDING PAGE PROTOTYPE</h3>
            <div className="image">
              <div className="video__wrapper video__wrapper--full">
                <div className="youtube__wrapper">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/rn2BbRXs8hk?rel=0"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <div className="aspect__ratio" />
              </div>
            </div>

            <h3>HOME PAGE PROTOTYPE</h3>
            <div className="image">
              <ImageZoom
                src="/images/codeit-6.jpg"
                imageName="codeit-6"
                alt="Screenshot of homepage for logged in user"
              />
            </div>

            <h3>TOPIC PAGE</h3>
            <div className="image">
              <ImageZoom
                src="/images/codeit-7.jpg"
                imageName="codeit-7"
                alt="Screenshot of topic page"
              />
            </div>
          </div>
        </div>

        <div className="image image--full">
          <img src="/images/codeit-responsive.png" alt="" />
        </div>
        <div className="container container--column">
          <div className="context">
            <h3>COURSE PAGE</h3>
            <div className="image">
              <div className="video__wrapper video__wrapper--full">
                <div className="youtube__wrapper">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/D07BnB0tX00?rel=0"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <div className="aspect__ratio" />
              </div>
            </div>

            <h3>COURSE DISCUSSION PAGE</h3>
            <div className="image">
              <ImageZoom
                src="/images/codeit-9.jpg"
                imageName="codeit-9"
                alt="Screenshot of course discussion page"
              />
            </div>

            <h3>DISCUSSION PAGE</h3>
            <div className="image">
              <ImageZoom
                src="/images/codeit-10.jpg"
                imageName="codeit-10"
                alt="Screenshot of discussion page"
              />
            </div>

            <h3>SEARCH PAGE</h3>
            <div className="image">
              <ImageZoom
                src="/images/codeit-11.jpg"
                imageName="codeit-11"
                alt="Screenshot of Search Page"
              />
            </div>
          </div>

          <div className="context">
            <h1>CONCLUSION</h1>
            <p>
              I spent 4 weeks on this project. During the first 2 weeks, I
              researched similar projects online and created a mind-map of
              takeaways and ideas. After creating a mind-map, my partner and I
              created an MVP of the project. During the final 2 weeks, I spent
              the first 4 days designing user interfaces for the project MVP by
              using Photoshop and Sketch. With 6 days remaining, I created
              functional prototypes by using HTML/CSS/JS with the mobile-first
              approach to get the feel and look of the project. Unfortunately,
              my ex-partner and I decided not to move on with the project due to
              other work commitments and time constraints.
            </p>
          </div>
        </div>
      </div>

      <div className="next__article">
        <Link to="/portfolio/kiyasla">
          <div className="container container--normal">
            <h4>UP NEXT</h4>
            <h1>KIYASLA</h1>
            <p>
              Created a website that introduced smarter comparisons between
              electronic products.
            </p>
          </div>
        </Link>

        <img
          src="/images/blank.png"
          alt="Kiyas.la home page"
          style={{
            background: "url(/images/kiyasla.jpg) no-repeat top left",
            backgroundSize: "cover"
          }}
        />
      </div>

      <Promo />
    </div>
  );
};

export default Genintra;
