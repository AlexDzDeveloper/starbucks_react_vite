import React from "react";
import "./ourContacts.scss";
import ContactsImg from "../../images/contacts/main.png";
import ContactLines from "../../images/wave1.png";

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
            <div className="contacts__icon"></div>
            <span>@supercoffee</span>
          </div>

          <div className="contacts__item">
            <div className="contacts__icon"></div>
            <span>+7-999-999-99-99</span>
          </div>
        </div>
      </div>
      <div className="contacts__imgAll">
        <div className="contacts__img">
          <img src={ContactsImg} alt="Contacts" />
        </div>
        <div className="contacts__Lines">
          <img src={ContactLines} alt="Lines" />
          <img src={ContactLines} alt="Lines" />
          <img src={ContactLines} alt="Lines" />
        </div>
      </div>

      <div className="contacts__decor"></div>
    </section>
  );
}

export default OurContacts;
