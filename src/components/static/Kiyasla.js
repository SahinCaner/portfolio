import React from "react";
import { Link } from "react-router-dom";
import ImageZoom from "../image-zoom/ImageZoom";
import Promo from "../common/Promo";

const SvY = () => {
  return (
    <div className="section section--portfolio">
      <div className="section__item section__item--header">
        <div className="container container--column">
          <h1>KIYASLA</h1>
          <p>
            In 2016, me and my partner were looking for a project to boost our
            future projects and that is how we decided to buy
            <strong> Saglik ve Yasam</strong>.
          </p>
          <ul className="skillset">
            <li>Experience Design</li>
            <li>Visual Design</li>
            <li>Front-end Development</li>
          </ul>
        </div>
      </div>
      <div className="section__item section__item--content">
        <div className="container container--column">
          <div className="context">
            <h1>WHAT IS SAGLIK VE YASAM?</h1>
            <p>
              An online health and well-being information source for everyone
              who needs healing or who wants to have a healtier life.
            </p>
            <p>
              Saglik ve Yasam had content partnership in and out of Turkey with
              so many health organisations and content creators such as Mayo
              Clinic and Greatist.
            </p>

            <p>
              Even though, Saglik ve Yasam had so many quality, proven and
              trusted content it was not a successful project. It did not have
              enough organic traffic and most of the users were coming from
              social media sites through advertisements. And even with
              advertisements it could only attract a shy of average
              <strong> 2000 people </strong> daily (depends on a budget, higher
              advertisement budget means, higher traffic). However, it is a very
              low number for its content.
            </p>

            <ImageZoom
              src="/images/svy-1.jpg"
              alt="saglik ve yasam index page"
              caption="Early design of Saglikveyasam.com's home page before I redesign
                it."
            />

            <h3>KEY MOTIVATION & GOAL</h3>

            <p>
              In 2016, me and my ex-partner were brain storming about a booster
              project. We needed a project that can attract high volumes from
              Google searches inorder to launch and boost our new projects
              without spending any money on advertisements. That was our key
              motivation.
            </p>

            <p>
              Meanwhile, old firm that I was working for decided to sell Saglik
              ve Yasam and its content rights. It was a perfect project for our
              motivation.
            </p>

            <p>
              Our keygoal was to establish a new strategy and redesign inorder
              to achive more users and create a trusted online healthcare
              information source in Turkey.
            </p>

            <h3>MY ROLE & RESPONSIBILITIES</h3>
            <p>
              I led the design and front-end development of Saglik ve Yasam and
              I worked alone during this process. It took 8 weeks to complete
              the design and development.
            </p>
          </div>
          <div className="context">
            <h4>KICKOFF</h4>
            <h1>PROCESS</h1>
            <p>
              There were already so many good articles and information in
              Saglikveyasam.com and we had no idea why users was not spending
              any time on the website.
            </p>
            <p>
              To understand why onboarded user's bounce rate were so high (80%),
              we set up Crazyegg’s heat map and collected our users behaviour
              data for a month.
            </p>

            <p>
              The data we collected from Crazyegg made me realize, almost no one
              was clicking the side related articles. That made me think, maybe
              I should remove those articles and let users focus on the article
              itself instead of distracting them early on the page.
            </p>

            <ImageZoom
              src="/images/svy-2.png"
              alt="saglik ve yasam article page"
              caption="Side related articles can be seen under &quot;Videolar&quot; section."
            />

            <p>
              With the old design of Saglik ve Yasam, most of the users also
              were not clicking to the related articles at the end of pages.
              They were clearly losing interest after they read the articles.
            </p>

            <ImageZoom
              src="/images/svy-5.png"
              alt="saglik ve yasam old related articles component"
              caption="Old design of the related articles at the end of the page. Maybe
                the titles were not readable enough? Or too generic? Okay I
                needed to solve this problem."
            />

            <p>
              Problem with the old related article design, it was not readable
              enough and they looked like advertisements rather than interesting
              article titles and images.
            </p>

            <p>
              To solve this problem I wanted to design something unusual, unique
              and bold. I wanted to create a fun experience for readers rather
              than boring encyclopedia like or regular CMS like website reading
              experience.
            </p>

            <p>
              With the rise of the smart phone usage in the world, I had to
              redesign the website with mobile-first mindset. And I started to
              redesign process by designing single Article Card Component.
            </p>

            <div className="image__wrapper">
              <div className="image">
                <ImageZoom
                  src="/images/svy-3.png"
                  alt="saglik ve yasam article component doodle"
                  caption="Early doodle of the new design of the single Article Card
                    Component with and without an image."
                />
              </div>

              <div className="image">
                <ImageZoom
                  src="/images/svy-4.png"
                  alt="saglik ve yasam related articles at the bottom of the page"
                  caption="Skecth of the article page. Article Cards can be seen at the
                    bottom of the page sitting side by side."
                />
              </div>
            </div>

            <p>
              New design of the Article Card Component, helped me to reuse it
              anywhere I want in the website. So I also decided to use it on
              home page too.
            </p>

            <ImageZoom
              src="/images/svy-6.png"
              alt="redesigned saglik ve yasam home page"
              caption="Redesigned home page of Saglik ve Yasam. I used the same Article
                Card Components in the home page."
            />

            <p>
              I redesigned every page with the new design language. I used
              bigger fonts, bigger images, more white spaces all over the
              website to be more consistent. With the usage of more white space,
              redesigned Saglik ve Yasam looked more modern, fresh and easy to
              read and scan.
            </p>

            <div className="image__wrapper">
              <div className="image">
                <ImageZoom
                  src="/images/svy-9.png"
                  alt="Pregnancy calculator page"
                  caption="New pregnancy calculator page. Select the latest period date
                    and it can calculate your estimated due date."
                />
              </div>
              <div className="image">
                <ImageZoom
                  src="/images/svy-10.png"
                  alt="Diseases index page"
                  caption="After clicking calculate button, you can learn your due date and
                    weekly pregnancy progess."
                />
              </div>
            </div>

            <div className="image__wrapper">
              <div className="image">
                <ImageZoom
                  src="/images/svy-8.png"
                  alt="Article page"
                  caption="Redesigned article page. No side columns, no distraction."
                />
              </div>
              <div className="image">
                <ImageZoom
                  src="/images/svy-7.png"
                  alt="Diseases index page"
                  caption="Redesigned disease index page. Bigger letter helps users to
                    understand which letter is active."
                />
              </div>
            </div>
          </div>

          <div className="context">
            <h1>OUTCOME</h1>
            <p>
              A year later we saw big improvment on Saglik ve Yasam analytics.
            </p>
            <ul>
              <li>
                Average time spend per person went from 20 secs to 2:30 minutes.
              </li>
              <li>Bounce rate decreased to 42% from 75%.</li>
              <li>Daily unique visitor number increased from 2000 to 25000.</li>
            </ul>

            <p>
              After we redesigned Saglik ve Yasam, we had so many offer for the
              website. One and half year later after redesigning, we decided to
              sell Saglik ve Yasam.
            </p>
            <p className="muted">
              PS: Company owner that owns Saglik ve Yasam said "We really wanted
              to buy Saglik ve Yasam and its design made a huge impact on our
              decision."
            </p>
          </div>
        </div>
      </div>
      <Promo />

      <div className="next__article">
        <Link to="/portfolio/kiyasla">
          <div className="container container--normal">
            <h1>KIYASLA</h1>
            <p>Introducing smarter comparisons.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SvY;
