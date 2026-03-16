import React from "react";
import "./Footer.scss";
import InstLogo from "../../images/footer/inst.svg";
import Arrow from "../../images/footer/Arrowbutton.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__all">
        <div className="footer__sociall">
          <div className="footer__brand">StarBucks</div>
          <li>
            <a className="footer__tel" href="tel:+79999999999">
              +7-999-999-99-99
            </a>
          </li>
        </div>

        <div className="footer__columns">
          <div className="footer__column">
            <h4 className="footer__item">Main</h4>
            <ul>
              <li>
                <a className="footer__a" href="#">
                  Buy
                </a>
              </li>
              <li>
                <a className="footer__a" href="#">
                  More
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__item">We make</h4>
            <ul>
              <li>
                <a className="footer__a" href="#">
                  Process
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>Products</h4>
            <ul>
              <li>
                <a className="footer__a" href="#">
                  Cappuccino
                </a>
              </li>
              <li>
                <a className="footer__a" href="#">
                  Fast
                </a>
              </li>
              <li>
                <a className="footer__a" href="#">
                  Fast
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__item">Events</h4>
            <ul>
              <li>
                <a className="footer__a" href="#">
                  Drinks
                </a>
              </li>
              <li>
                <a className="footer__a" href="#">
                  Eat
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__item">Contacts</h4>
            <ul>
              <li>
                <a className="footer__a" href="#">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__actions">
          <a href="#" className="footer__instagram">
            <img src={InstLogo} alt="Instagram logo"></img>
            <img src={Arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
