import React from "react";
import { Link } from "react-router-dom";
import ImageZoom from "../image-zoom/ImageZoom";
import Promo from "../common/Promo";

const SvY = () => {
  return (
    <div className="section section--portfolio">
      <div className="section__item section__item--header">
        <div className="container container--column">
          <h1>SAGLIK VE YASAM</h1>
          <p>
            Redesigned and applied new strategies to Saglik ve Yasam to attract
            more organic users from Google searches.
          </p>
          <ul className="skillset">
            <li>Experience Design</li>
            <li>Visual Design</li>
            <li>Front-end Development</li>
          </ul>
        </div>
      </div>
      <div className="section__item section__item--summary">
        <div className="context">
          <div className="container container--column">
            <h2>SUMMARY</h2>
            <ul>
              <li>
                I completed the design and the development in{" "}
                <strong>8 weeks.</strong>
              </li>
              <li>
                Average daily unique visitor number increased from 2,000 people
                to <strong>25,000 people</strong>.
              </li>
              <li>
                Bounce rates dropped from 75% to <strong>42%.</strong>{" "}
              </li>
              <li>
                Average session duration on the website increased from 20
                seconds to <strong>2 minutes 30 seconds.</strong>{" "}
              </li>
            </ul>
            <p className="muted muted--info">
              - We reached these numbers <u>within a year</u> after launching
              the new design.
            </p>
          </div>
        </div>
      </div>
      <div className="section__item section__item--content">
        <div className="container container--column">
          <div className="context">
            <h1>WHAT IS SAGLIK VE YASAM?</h1>
            <p>
              Saglik ve Yasam is an online health and well-being information
              source for everyone who needs healing or wants to live a healthier
              life. Saglik ve Yasam had content partnership domestically and
              internationally with many health organizations and content
              creators such as Mayo Clinic and Greatist.
            </p>

            <p>
              Although Saglik ve Yasam had proven and trusted content, it was in
              need of updates based on traffic and user engagement. It did not
              have enough organic traffic and most of the users were coming from
              social media sites through advertisements. Even with
              advertisements, it could only attract a paltry average of 2000
              people daily. Considering the quality of the content, this number
              was astonishingly low. In addition, the site had high bounce rates
              at approximately 75% and users were not spending enough time on
              the site, at an average of 20 seconds per user.
            </p>

            <ImageZoom
              src="/images/svy-1.jpg"
              imageName="svy-1"
              alt="saglik ve yasam index page"
              caption="The early design of Saglikveyasam.com's home page before I redesign
                it."
            />

            <h3>KEY MOTIVATION & GOAL</h3>

            <p>
              In 2016, my ex-partner and I were motivated to begin a booster
              project in order to build up our new company’s reputation. We
              wanted a project that could attract high volumes from Google
              searches in order to launch and subsequently boost our new
              projects without spending any money on advertisements. We were
              searching for an existing website with quality content that had a
              natural capacity for more traffic and user engagement. During this
              time, a previous client that I had worked for wanted to sell
              Saglik ve Yasam and its content rights. This adaptable enterprise
              provided an opportunity to draw attention to our company’s
              capabilities. Our key goal for Saglik ve Yasam was to achieve more
              users and create a trusted online healthcare information source in
              Turkey.
            </p>

            <h3>MY ROLE & RESPONSIBILITIES</h3>
            <p>
              I worked alone on the UX/UI design and front-end development while
              my ex-partner was working on back-end development. It took 8 weeks
              to complete the design and development.
            </p>
          </div>
          <div className="context">
            <h4>KICKOFF</h4>
            <h1>PROCESS</h1>
            <p>
              Considering the reputable articles and high caliber information
              provided by Saglik ve Yasam, it was baffling to see the short
              amount of time users were spending on the site.
            </p>
            <p>
              To understand why onboard users’ bounce rates were so high at
              around 75%, we set up a tracking tool, Crazyegg’s heatmap, and
              collected our users’ behavior data for a month.
            </p>

            <p>
              After analyzing the data from Crazyegg, I discovered some
              problems. One of which was almost no one was clicking the side
              related articles at the top of the page. This made me consider
              removing those articles to allow users to focus on the main
              article itself rather than being overloaded by related articles
              they found distracting.
            </p>

            <ImageZoom
              src="/images/svy-2.jpg"
              imageName="svy-2"
              alt="saglik ve yasam article page"
              caption="Side related articles can be seen under &quot;Videolar&quot; section."
            />

            <p>
              In addition, with the old design of Saglik ve Yasam, most of the
              users were not clicking on the related articles at the end of
              pages. They were clearly losing interest after they read the main
              article.
            </p>

            <ImageZoom
              src="/images/svy-5.jpg"
              imageName="svy-5"
              alt="saglik ve yasam old related articles component"
              caption="Old design of the related articles at the end of the page. Maybe the titles were not readable enough? Or too generic? I needed to solve this problem."
            />

            <p>
              Another problem with the old related article design was that it
              was not readable enough and related articles looked like
              advertisements rather than interesting articles with accompanying
              titles and images.
            </p>

            <p>
              To solve this problem I wanted to design something unusual,
              unique, and bold. I wanted to create a fun experience for readers
              rather than a typical, boring encyclopedia-like or regular
              CMS-like website.
            </p>

            <p>
              Analytics data from Google was showing that 40% of the visitors
              were using mobile devices and the old design did not have
              mobile-friendly user interface. Thus, I had to redesign the
              website with a mobile-first mindset. I started the redesign
              process by designing single Article Card Component.
            </p>

            <div className="image__wrapper">
              <div className="image">
                <ImageZoom
                  src="/images/svy-3.jpg"
                  imageName="svy-3"
                  alt="saglik ve yasam article component doodle"
                  caption="Early doodle of the new design of the single Article Card Component with and without an image"
                />
              </div>

              <div className="image">
                <ImageZoom
                  src="/images/svy-4.jpg"
                  imageName="svy-4"
                  alt="saglik ve yasam related articles at the bottom of the page"
                  caption="Sketch of the article page. Article Cards can be seen at the bottom of the page sitting side by side."
                />
              </div>
            </div>

            <p>
              The new design of the Article Card Component helped me to reuse it
              anywhere I wanted on the website. I also decided to use it on the
              homepage.
            </p>

            <ImageZoom
              src="/images/svy-6.jpg"
              imageName="svy-6"
              alt="redesigned saglik ve yasam home page"
              caption="The Redesigned homepage of Saglik ve Yasam. I used the same Article Card Components on the homepage."
            />

            <p>
              I redesigned every page with the new design language. I used
              bigger fonts, bigger images, and more white space all over the
              website to be more consistent. With the usage of more white space,
              the redesigned Saglik ve Yasam looked more modern, fresh, and easy
              to read and scan.
            </p>

            <div className="image__wrapper">
              <div className="image">
                <ImageZoom
                  src="/images/svy-9.jpg"
                  imageName="svy-9"
                  alt="Pregnancy calculator page"
                  caption="New pregnancy calculator page. Select the latest period date
                    and it can calculate your estimated due date."
                />
              </div>
              <div className="image">
                <ImageZoom
                  src="/images/svy-10.jpg"
                  imageName="svy-10"
                  alt="Diseases index page"
                  caption="After clicking calculate button, you can learn your due date and
                    weekly pregnancy progess."
                />
              </div>
            </div>

            <div className="image__wrapper">
              <div className="image">
                <ImageZoom
                  src="/images/svy-8.jpg"
                  imageName="svy-8"
                  alt="Article page"
                  caption="Redesigned article page. No side columns, no distraction."
                />
              </div>
              <div className="image">
                <ImageZoom
                  src="/images/svy-7.jpg"
                  imageName="svy-7"
                  alt="Diseases index page"
                  caption="Redesigned disease index page. Bigger letter helps users to
                    understand which letter is active."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="image image--full">
          <img src="/images/svy-responsive.png" alt="" />
        </div>

        <div className="container container--column">
          <div className="context">
            <h1>OUTCOME</h1>
            <p>
              I completed the design and the development in 8 weeks. The
              following week we launched the redesign of Saglik ve Yasam.
            </p>
            <p>
              A year after launching the new design, Saglik ve Yasam gained
              momentum from Google searches. Bounce rates dropped, people were
              spending more time on the website, and its average daily unique
              visitor number was 12 times more than before.
            </p>
            <ul className="chart__list">
              <li>
                <div className="title">
                  <h4>AVERAGE SESSION DURATION PER PERSON</h4>
                </div>
                <div className="result">
                  <div className="circle">
                    <div className="inner__circle">
                      <h3>20</h3>
                      <h6>seconds</h6>
                    </div>
                  </div>
                  <h2>to</h2>
                  <div className="circle">
                    <div className="inner__circle">
                      <h3>140</h3>
                      <h6>seconds</h6>
                      <div className="increment">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="chart__list">
              <li>
                <div className="title">
                  <h4>BOUNCE RATE</h4>
                </div>
                <div className="result">
                  <div className="circle">
                    <div className="inner__circle">
                      <h3>75%</h3>
                    </div>
                  </div>
                  <h2>to</h2>
                  <div className="circle">
                    <div className="inner__circle">
                      <h3>42%</h3>
                      <div className="increment increment--reverse">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="chart__list">
              <li>
                <div className="title">
                  <h4>AVERAGE DAILY UNIQUE VISITORS</h4>
                </div>
                <div className="result">
                  <div className="circle">
                    <div className="inner__circle">
                      <h3>2,000</h3>
                      <h6>people</h6>
                    </div>
                  </div>
                  <h2>to</h2>
                  <div className="circle">
                    <div className="inner__circle">
                      <h3>25,000</h3>
                      <h6>people</h6>
                      <div className="increment">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="context">
            <h1>LESSONS</h1>
            <p>
              In my experience, in order to design and develop a successful UX,
              one must consider every aspect of the project. UX design and
              development is a combination and harmony of skill sets.
            </p>

            <p>
              For websites like Saglik ve Yasam I always thought quality content
              was the most important ingredient and I still think it is true.
              However, just because a website has quality content that does not
              mean it will have a higher rank on a Google search result page. In
              fact, it is much more complicated. Search engine optimization,
              back-end and front-end development, and UX/UI design must work
              together in order to achieve a smooth experience for users to
              interact with quality content.
            </p>
            <p className="muted">
              PS: After we launched the redesign of Saglik ve Yasam, we had many
              offers for the website. One and half years later we decided to
              sell Saglik ve Yasam.
            </p>
            <p className="muted">
              PPS: The company owner that bought Saglik ve Yasam from us said:
              "We really wanted to buy Saglik ve Yasam and its design made a
              huge impact on our decision."
            </p>
          </div>
        </div>
      </div>

      <div className="next__article">
        <Link to="/portfolio/genintra">
          <div className="container container--normal">
            <h4>UP NEXT</h4>
            <h1>GENINTRA</h1>
            <p>
              Designed and developed an employee management system for a Fortune
              500 company.
            </p>
          </div>
        </Link>

        <img
          src="/images/blank.png"
          alt="Kiyas.la home page"
          style={{
            background: "url(/images/genintra_article.jpg) no-repeat top left",
            backgroundSize: "cover"
          }}
        />
      </div>

      <Promo />
    </div>
  );
};

export default SvY;
