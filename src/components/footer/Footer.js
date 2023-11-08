import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer__information">
        <div className="information__about">
          <div className="about__info">
            <h1>Find Your Food</h1>
            <p>Find Foodbanks, Feed Hope</p>
          </div>

          <div className="about__socials">
            <div className="about__instagram s">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M13.0843 1.15448H5.38764C3.04973 1.15448 1.15449 3.04972 1.15449 5.38762V13.0843C1.15449 15.4222 3.04973 17.3174 5.38764 17.3174H13.0843C15.4222 17.3174 17.3174 15.4222 17.3174 13.0843V5.38762C17.3174 3.04972 15.4222 1.15448 13.0843 1.15448Z"
                  stroke="#F4F6F0"
                  stroke-width="0.769663"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.8202 11.6517L7.06758 11.4044L6.8202 11.6517C7.33533 12.1669 7.99976 12.5064 8.71901 12.6222C9.43825 12.7379 10.1757 12.6239 10.8264 12.2964C11.4771 11.9689 12.008 11.4445 12.3435 10.7979C12.679 10.1512 12.8021 9.41526 12.6953 8.69464C12.5863 7.95959 12.2438 7.27907 11.7183 6.75363C11.1929 6.22818 10.5123 5.88566 9.77729 5.77666C9.05667 5.6698 8.32071 5.79289 7.67408 6.12841C7.02744 6.46393 6.50307 6.99481 6.17555 7.64553C5.84802 8.29625 5.73402 9.03368 5.84976 9.75292C5.96549 10.4722 6.30507 11.1366 6.8202 11.6517Z"
                  stroke="#F4F6F0"
                  stroke-width="0.769663"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.4691 5.00281H13.477"
                  stroke="#F4F6F0"
                  stroke-width="0.769663"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="about__facebook s">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M15.0309 1.53931C15.0309 1.32677 14.8586 1.15448 14.6461 1.15448H12.3371C11.2144 1.15448 10.1377 1.60047 9.3438 2.39434C8.54993 3.1882 8.10394 4.26492 8.10394 5.38762V7.31178H6.17978C5.96724 7.31178 5.79495 7.48407 5.79495 7.69661V10.7753C5.79495 10.9878 5.96724 11.1601 6.17978 11.1601H8.10394V16.9326C8.10394 17.1451 8.27623 17.3174 8.48877 17.3174H11.5674C11.78 17.3174 11.9523 17.1451 11.9523 16.9326V11.1601H13.8764C14.053 11.1601 14.2069 11.0399 14.2497 10.8686L15.0194 7.78995C15.0482 7.67498 15.0223 7.55318 14.9494 7.45978C14.8765 7.36637 14.7646 7.31178 14.6461 7.31178H11.9523V5.38762C11.9523 5.28556 11.9928 5.18767 12.065 5.1155C12.1371 5.04333 12.235 5.00279 12.3371 5.00279H14.6461C14.8586 5.00279 15.0309 4.83049 15.0309 4.61796V1.53931Z"
                  stroke="#F4F6F0"
                  stroke-width="0.769663"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="about__youtube s">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M2.13195 13.1641C2.13351 13.1715 2.13529 13.1788 2.13729 13.1861C2.2256 13.5082 2.39622 13.8017 2.63238 14.0379L2.89955 13.7707L2.63238 14.0379C2.86854 14.274 3.1621 14.4447 3.4842 14.533C3.49699 14.5365 3.50996 14.5393 3.52304 14.5415C7.69273 15.2324 11.9477 15.2324 16.1174 14.5415C16.1305 14.5393 16.1435 14.5365 16.1562 14.533C16.4783 14.4447 16.7719 14.274 17.0081 14.0379C17.2442 13.8017 17.4148 13.5082 17.5032 13.1861C17.5051 13.1788 17.5069 13.1715 17.5085 13.1641C18.0573 10.5741 18.0573 7.89787 17.5085 5.3079C17.5069 5.30053 17.5051 5.2932 17.5032 5.28592C17.4148 4.96383 17.2442 4.67027 17.0081 4.43411C16.7719 4.19795 16.4783 4.02732 16.1562 3.93901C16.1434 3.9355 16.1305 3.93266 16.1174 3.93049C11.9477 3.23972 7.69275 3.23972 3.52305 3.93049C3.50996 3.93266 3.49699 3.9355 3.4842 3.93901C3.1621 4.02732 2.86854 4.19795 2.63238 4.43411C2.39622 4.67027 2.2256 4.96383 2.13729 5.28592C2.13529 5.2932 2.13351 5.30053 2.13195 5.3079C1.58314 7.89787 1.58314 10.5741 2.13195 13.1641Z"
                  stroke="#F4F6F0"
                  stroke-width="0.769663"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.89607 11.545C7.89607 11.6836 7.97065 11.8116 8.09129 11.8799C8.21194 11.9482 8.36001 11.9463 8.47889 11.875L12.3272 9.56598C12.4431 9.49643 12.514 9.37117 12.514 9.23599C12.514 9.10081 12.4431 8.97555 12.3272 8.906L8.47889 6.59701C8.36001 6.52568 8.21194 6.52381 8.09129 6.59212C7.97065 6.66043 7.89607 6.78836 7.89607 6.927V11.545Z"
                  stroke="#F4F6F0"
                  stroke-width="0.769663"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="about__twitter s">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g clip-path="url(#clip0_56_140)">
                  <path
                    d="M9.07943 6.40249L14.5234 0.539307H13.2333L8.50636 5.63023L4.73092 0.539307H0.376404L6.0856 8.23768L0.376404 14.3861H1.66652L6.65835 9.00994L10.6455 14.3861H15L9.07911 6.40249H9.07943ZM7.31244 8.3055L6.73398 7.53892L2.13137 1.43913H4.11292L7.82727 6.36185L8.40573 7.12844L13.234 13.5272H11.2524L7.31244 8.3058V8.3055Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_56_140">
                    <rect
                      width="14.6236"
                      height="13.8539"
                      fill="white"
                      transform="translate(0.376404 0.539307)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="information__links">
          <div className="links__who-are">
            <h1>Who are we?</h1>

            <ul className="who-are__links">
              <li><NavLink>Know More About Us</NavLink></li>
              <li><NavLink>Contact Us</NavLink></li>
              <li><NavLink>Newsletter</NavLink></li>
            </ul>
          </div>

          <div className="links__others">
            <h1>Other Links</h1>

            <ul className="who-are__links">
              <li><NavLink>Become a Partner</NavLink></li>
              <li><NavLink>Be a Donor</NavLink></li>
              <li><NavLink>Dailybread</NavLink></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <p>© Copyright 2023, Find Your Food.</p>
      </div>
    </div>
  );
};

export default Footer;
