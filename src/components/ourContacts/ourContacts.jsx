import React from "react";
import "./ourContacts.scss";

function OurContacts() {
  return (
    <section className="contacts">
      <div className="contacts__content">
        <h1 className="contacts__title">
          Our <br />
          <span>Contacts</span>
        </h1>

        <p className="contacts__desc">
          Have time to buy the most harmonious drinks in the new Starbucks
          coffee and don't forget about the discount!
        </p>

        <div className="contacts__items">
          <div className="contacts__item">
            <div className="contacts__icon">
              <svg viewBox="0 0 24 24">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span>@supercoffee</span>
          </div>

          <div className="contacts__item">
            <div className="contacts__icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2h-1C8 21 3 16 3 9V8z"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span>+7-999-999-99-99</span>
          </div>
        </div>
      </div>

      <div className="contacts__decor">
        <svg viewBox="0 0 200 200">
          <path d="M0,150 C80,100 120,100 200,50" />
          <path d="M0,170 C80,120 120,120 200,70" />
        </svg>
      </div>
    </section>
  );
}

export default OurContacts;
