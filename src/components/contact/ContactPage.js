import React from "react";

const ContactPage = () => {
  return (
    <div className="section section--contact">
      <div className="section__item section__item--header">
        <div className="container container--column">
          <h1>Let's Communicate</h1>
          <h3>
            Currently I am looking for a full-time Senior UX / UI position.
          </h3>
          <p>
            <em>
              If you think I am a <strong> good fit </strong> for your company,
              please contact me.
            </em>
          </p>

          <ul className="contact__info">
            <li>
              <a href="mailto:canersahin@gmail.com">
                <div className="contact__icon">
                  <img src="/images/mail.svg" alt="envelope icon" />
                </div>
                <span>canersahin@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+18184044919">
                <div className="contact__icon">
                  <img src="/images/phone.svg" alt="smartphone icon" />
                </div>
                <span>+1 (818) 404 4919</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
