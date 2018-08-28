import React from "react";
import { Link } from "react-router-dom";
import ImageZoom from "../image-zoom/ImageZoom";
import Promo from "../common/Promo";

const Kiyasla = () => {
  return (
    <div className="section section--portfolio">
      <div className="section__item section__item--header">
        <div className="container container--column">
          <h1>KIYASLA</h1>
          <p>
            Created a website that introduced smarter comparisons between
            electronic products.
          </p>
          <ul className="skillset">
            <li>Product Design</li>
            <li>Experience Design</li>
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
                I completed the design and the development in
                <strong> 12 weeks.</strong>
              </li>
              <li>
                In 2015, almost <strong> 14 million</strong> people in Turkey
                visited Kiyasla which is 20% of the total population.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section__item section__item--content">
        <div className="container container--column">
          <div className="context">
            <h1>WHAT IS KIYASLA?</h1>
            <p>
              Kiyasla is a web-based smart comparison engine that generates
              comprehensive data to allow consumers to compare two products,
              such as smartphones, digital cameras, and tablets.
            </p>
            <p>
              Our goal was to create a service for young adults to help them to
              make a “perfect purchase” when searching to select their next
              smartphone.
            </p>
            <p>
              The minimum viable product of this project was completed in 12
              weeks and was a team of 3 people.
            </p>
            <div className="image__wrapper image__wrapper--gallery">
              <div className="image__gallery__item image__gallery__item--left">
                <div className="image">
                  <ImageZoom
                    src="/images/kiyasla-1.jpg"
                    imageName="kiyasla-1"
                    alt="First prototype of Kiyasla"
                  />
                  <span className="order">1</span>
                </div>
              </div>
              <div className="image__gallery__item image__gallery__item--right">
                <div className="image">
                  <ImageZoom
                    src="/images/kiyasla-2.jpg"
                    imageName="kiyasla-2"
                    alt="Second iteration of Kiyasla's homepage"
                  />
                  <span className="order">2</span>
                </div>

                <div className="image">
                  <ImageZoom
                    src="/images/kiyasla-3.jpg"
                    imageName="kiyasla-3"
                    alt="Third iteration of Kiyasla's homepage"
                  />
                  <span className="order">3</span>
                </div>
                <div className="image">
                  <ImageZoom
                    src="/images/kiyasla-4.jpg"
                    imageName="kiyasla-4"
                    alt="Fourth iteration of Kiyasla's homepage"
                  />
                  <span className="order">4</span>
                </div>
              </div>
              <figcaption>
                These images are Kiyasla's homepage iterations over time. The
                changes that we made were based on user feedback.
              </figcaption>
            </div>
            <h3>KEY MOTIVATION & GOAL</h3>
            <p>
              {" "}
              In 2011, my brother and I were shopping for a smartphone and we
              were overwhelmed with our options. Back in 2011, smartphones were
              still considered new and most people had a vague idea about those
              products. As we searched through our options, we wanted to compare
              some of the products and we found comparison websites both in
              Turkish and English. However, they were all doing the same kind of
              comparisons: putting two or more products’ features side by side
              in a table row, without clear explanations of the features being
              compared.
            </p>

            <ImageZoom
              src="/images/kiyasla-44.jpg"
              imageName="kiyasla-44"
              alt="geekaphone comparison page"
              caption="This was a typical smartphone comparison in 2012. 
              Putting features side by side does not tell users why one feature is superior to the other one.
               Credits geekaphone.com"
            />

            <p>
              That was the biggest problem with the websites that compared
              products. Users did not know what all those numbers in rows meant
              for them. We wanted to bring a new approach to this problem. We
              wanted to make it easier to use and most importantly easier to
              understand.
            </p>

            <h3>MY ROLE & RESPONSIBILITIES</h3>

            <p>
              Kiyas.la was built by three people. My brother Fatih and I were
              working together in the same space and our graphic designer,
              Baris, was working remotely. We used Trello for our project
              management and Dropbox to share files within our small team.
            </p>
            <p>
              I was responsible for the User Experience of the project. I drew
              the wireframes, researched consumer use, and extensively
              researched websites that compared products. I converted photoshop
              files to CSS/HTML and JS.
            </p>
          </div>
          <div className="context">
            <h4>KICKOFF</h4>
            <h1>MY DESIGN PROCESS</h1>
            <p>
              I followed the Lean UX Design Thinking process to make sure that
              my design decisions were supported by user research and feedback.
            </p>
            <figure>
              <img src="/images/lean.png" alt="Lean UX process" />
            </figure>
            <h3>EMPATHIZING WITH THE USER</h3>
            <p>
              To start off, I created a persona of potential Kiyasla user based
              on online research and my understanding of people who were
              shopping online for smartphones. I came back with this consumer in
              mind throughout our project to guide my design decisions.
            </p>
            <div className="persona">
              <div className="persona__item persona__item--image">
                <img src="/images/emrah.jpg" alt="Picture of a male person." />
                <div className="persona__name">EMRAH</div>
              </div>
              <div className="persona__item">
                <h4>DEMOGRAPHICS</h4>
                <ul>
                  <li>
                    <span>Age: </span> 20
                  </li>
                  <li>
                    <span>Sex: </span> Male
                  </li>
                  <li>
                    <span>Location: </span> Ankara, Turkey
                  </li>
                  <li>
                    <span>Occupation: </span> University Student
                  </li>
                </ul>
              </div>
              <div className="persona__item">
                <h4>FRUSTRATIONS</h4>
                <ul>
                  <li>Keeping track of new technologies and new products.</li>
                  <li>Unreliable information.</li>
                  <li>Complicated websites.</li>
                </ul>
              </div>
              <div className="persona__item">
                <h4>NEEDS & GOALS</h4>
                <ul>
                  <li>Searching for a new smartphone.</li>
                  <li>Looking for the best option for his budget.</li>
                  <li>Reaching information as quickly as possible.</li>
                </ul>
              </div>
            </div>
            <p>This persona helped me to ask these questions to myself:</p>
            <ul>
              <li>Who is the user I am designing for? </li>
              <li>What exactly does the user want from my website? </li>
              <li>
                How is the user going to achieve his goals when he visits my
                site?
              </li>
              <li>
                Why would the user come to my website and not anywhere else?
              </li>
            </ul>
            <p>
              With these questions in mind, whenever I felt lost during the
              design decisions process I was always able to remember whom I was
              designing this project for.
            </p>
            <h3>DEFINING AND PRIORITIZING THE PROBLEMS</h3>
            <p>
              While I was designing Kiyasla, I tried to solve so many problems
              but in this case study I am going to focus two pain points.
            </p>
            <h4>Pain Point 1: Comparison pages are hard to understand.</h4>
            <p>
              Reading something that we don't understand can be really
              frustrating. This is usually what happens when you compare
              products on the web. Almost all of the websites use the same kind
              of comparison design. If you ever tried to compare products
              before, you probably ended up a page like this:{" "}
            </p>
            <div className="image__wrapper">
              <div className="image">
                <ImageZoom
                  src="/images/kiyasla-40.jpg"
                  imageName="kiyasla-40"
                  alt="General product comparison"
                  caption="This is a comparison web page from 2018. Credits gsmarena.com"
                />
              </div>
              <div className="image">
                <ImageZoom
                  src="/images/kiyasla-41.jpg"
                  imageName="kiyasla-41"
                  alt="General product comparison"
                  caption="When the user scrolls down, it gets even more complicated."
                />
              </div>
            </div>
            <p>
              It is not very surprising why so many people get frustrated and
              they do not understand what all those numbers and features mean.
            </p>
            <p>
              This pain point was the main reason why we decided to build
              Kiyasla. We wanted to bring new an approach to this problem while
              keeping a similar layout. We wanted to design a system that could
              compare any numeric or boolean value and make a meaningful
              explanation with those values.
            </p>
            <h4>
              Pain Point 2: It takes too many steps to compare two products.
            </h4>
            <p>
              To make a comparison between products, a user would select a
              brand, followed by a model, and then choose another brand and
              model to compare, which was a four-step process to compare two
              products.
            </p>
            <div className="image__wrapper">
              <div className="image">
                <ImageZoom
                  src="/images/kiyasla-60.jpg"
                  imageName="kiyasla-60"
                  alt="General product comparison"
                  caption="This was the typical scenario to compare products. 
                          First, the user selects the brand and then selects the model and 
                          repeats that every time they want to make a comparison."
                />
              </div>
              <div className="image">
                <ImageZoom
                  src="/images/kiyasla-61.jpg"
                  imageName="kiyasla-61"
                  alt="General product comparison"
                  caption="First, the user selects a brand from a dropdown list."
                />
              </div>
            </div>
            <p>
              In addition, some brands have hundreds of products to select from,
              and users are overloaded with trying to find the specific model
              they want to compare.{" "}
            </p>
            <ImageZoom
              src="/images/kiyasla-62.jpg"
              imageName="kiyasla-62"
              alt="General product comparison"
              caption="Next, the user tries to find the model they are looking for."
            />
            <p>
              Forcing users to select the brand and model in this fashion made
              them quickly irritated at trying to pick the correct product, in
              some cases getting it wrong and having to start the process over
              again. Users were spending a lot of time trying to navigate these
              sites, getting aggravated with the process, and abandoning their
              search.
            </p>
            <h3>IDEATING THE SOLUTION</h3>
            <p>
              Next, it was time to start sketching. I came up with several
              potential solutions to each of the problems and made some rough UI
              sketches.
            </p>
            <ImageZoom
              src="/images/kiyasla-20.jpg"
              imageName="kiyasla-20"
              alt="Lo-Fi sketches of Kiyasla"
              caption="Here are some of the Lo-Fi sketches that I shared with our graphic designer, Baris."
            />
            <p>
              As soon as I did the Lo-Fi UI sketches I shared them with my team
              and got feedback from them to refine my sketches and narrow down
              my solutions for the Hi-Fi mockups. After narrowing down, I sent
              all the Lo-Fi sketches to our graphic designer team member, Baris.
            </p>
            <h3>PROTOTYPING</h3>
            <p>
              Baris did an outstanding job turning my Lo-Fi sketches into Hi-Fi
              mockups. He spent two weeks designing the Hi-Fi mockups and sent
              them to me as photoshop files. Then I started to convert those
              photoshop files to HTML/CSS/JS. It took me about three weeks to
              convert those photoshop files into prototypes.
            </p>
            <p>
              <strong>
                Pain Point 1: Comparison pages are hard to understand.
              </strong>
            </p>
            <p>
              <strong>Design solution:</strong> I took the typical product
              comparison design layout approach and modified it by adding an
              extra column to the far right. With that extra column, I was able
              to educate users on the features being compared and what the data
              meant for them. Once a user understands the features being
              compared, they can make an informed choice on purchasing a
              product.
            </p>
            <ImageZoom
              src="/images/kiyasla-7.jpg"
              imageName="kiyasla-7"
              alt="Fourth prototype of comparison page"
              caption="Here are clear explanations of different features between two products. 
                       It helps the user to make an informed purchase."
            />
            <div className="image__wrapper">
              <div className="image">
                <ImageZoom
                  src="/images/kiyasla-5.jpg"
                  imageName="kiyasla-5"
                  alt="This is the first version of the comparison page."
                  caption="This is the first version of the comparison page."
                />
              </div>

              <div className="image">
                <ImageZoom
                  src="/images/kiyasla-6.jpg"
                  imageName="kiyasla-6"
                  alt="Over three years, we updated the comparison page based on user feedback."
                  caption="Over three years, we updated the comparison page based on user feedback."
                />
              </div>
            </div>
            <p>
              <strong>
                Pain Point 2: It takes too many steps to compare two products.
              </strong>
            </p>
            <p>
              <strong>Design solution:</strong> In 2011, the autocomplete
              feature was new and it was not a common approach. Having a
              developer background helped me to pull that feature into my design
              decision. It is important to know what kind of technologies you
              can bring to your design to solve problems like this.
            </p>
            <p>
              I wanted to use the autocomplete feature because that would
              eliminate the extra two steps and it would be much more
              user-friendly. Using the autocomplete feature, a user would not
              need to know the specific brand and model, only one or the other,
              to select the option they’re looking for. It narrows the results
              of what they are looking for to more easily select the correct
              one.
            </p>
            <ImageZoom
              src="/images/kiyasla-80.jpg"
              imageName="kiyasla-80"
              alt="Fourth prototype of comparison page"
              caption="As soon as the user starts typing, an
              input box makes an AJAX request to the server to bring all relative options."
            />
            <div className="image__wrapper">
              <div className="image">
                <ImageZoom
                  src="/images/kiyasla-81.jpg"
                  imageName="kiyasla-81"
                  alt="Fourth prototype of comparison page"
                  caption="After the server response to an AJAX request, 
                  the user can use the up and down arrow keys or the mouse to select the option."
                />
              </div>

              <div className="image">
                <ImageZoom
                  src="/images/kiyasla-82.jpg"
                  imageName="kiyasla-82"
                  alt="Fourth prototype of comparison page"
                  caption="The user can type either the brand or model, and the server can provide relevant options."
                />
              </div>
            </div>
          </div>

          <div className="context">
            <h1>VALIDATION & OUTCOME</h1>
            <p>
              After prototyping we conducted user research. Our subject group
              was composed of 10 university students in Ankara, Turkey. Each
              student was given tasks to complete on our prototype website and
              our competitors’ websites. Tasks were assigned based on common
              features across all websites. Every task was timed and users were
              asked to rank all the websites according to usability after
              completing each task.
            </p>

            <ImageZoom
              src="/images/kiyasla-90.jpg"
              imageName="kiyasla-90"
              alt="Fourth prototype of comparison page"
              caption="Each task was timed in seconds."
            />

            <p>
              All the university students we surveyed ranked Kiyasla as their
              first choice in terms of usability. On average users needed less
              time to complete each task on Kiyasla than on competitors'
              websites.
            </p>

            <p>
              After receiving validation from the subject group, we released the
              first version of Kiyasla. Within a week it got featured in the
              biggest tech news
              <a
                href="https://webrazzi.com/2011/09/08/kiyasla/"
                target="_blank"
              >
                {"  "}
                website {"  "}
              </a>
              in Turkey.
            </p>

            <p>
              In three years, Kiyasla got so popular that it was serving almost
              40,000 people daily. In 2015, 14 million people in Turkey used
              Kiyasla (which is equal the 20% of the population of Turkey) and
              eventually those numbers led us to sell Kiyasla in the same year.
            </p>
          </div>

          <div className="context">
            <h1>LESSONS</h1>
            <p>
              Every good design has logical reasoning and unique development
              behind it. Empathizing with users and understanding potential
              challenges plays a crucial role in designing successful products.
              With Kiyasla, we achieved our goal of making users feel like
              informed and discerning consumers by the ease of using the site to
              compare products. Once you help users accomplish their intended
              tasks easily and directly, they become loyal to your product and
              brand.
            </p>
          </div>
        </div>
      </div>

      <div className="next__article">
        <Link to="/portfolio/saglik-ve-yasam">
          <div className="container container--normal">
            <h4>UP NEXT</h4>
            <h1>SAGLIK VE YASAM</h1>
            <p>
              Redesigned and applied new strategies to Saglik ve Yasam to
              attract more organic users from Google searches.
            </p>
          </div>
        </Link>

        <img
          src="/images/blank.png"
          alt="Kiyas.la home page"
          style={{
            background: "url(/images/svy-1@2x.jpg) no-repeat top left",
            backgroundSize: "cover"
          }}
        />
      </div>

      <Promo />
    </div>
  );
};

export default Kiyasla;
