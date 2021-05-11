import React from 'react';

import './footer.css';

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer__about">
          <p>
            <small>
              <i>
                "If you want to make your money work for you, you have to know
                how money works - Dave Ramsey."
              </i>
            </small>
          </p>
          <p>
            <small>
              I made this application to help users managing their individual
              financials. After signing in an user will be able to plan monthly
              budget, allocate spending and income, record daily transactions,
              and see overview reports.
            </small>
          </p>
        </div>
        <hr className="separator separator--light" />
        <div className="footer__content">
          <div className="footer__content__info">
            <h5>Aidan Dang</h5>
            <p>
              <small>
                Dedicated and efficient developer with 3 years of experience in
                designing, developing, implementing and testing web
                applications. Certified in both front-end and back-end
                technologies. Excited to be at a new chapter of the career as a
                computer engineer.
              </small>
            </p>
          </div>
          <div className="footer__content__contact">
            <h5>Email</h5>
            <p>
              <small>
                <a href="mailto:info@aidandang.com">info@aidandang.com</a>
              </small>
            </p>
          </div>
          <div className="footer__content__social">
            <h5>Social Media</h5>
            <p>
              <span className="social-space">
                <a href="https://github.com/aidandang">
                  <i className="fab fa-github"></i>
                </a>
              </span>
              <span className="social-space">
                <a href="https://www.linkedin.com/in/aidandang/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/aidan2303">
                  <i className="fab fa-twitter"></i>
                </a>
              </span>
            </p>
          </div>
        </div>
        <hr className="separator separator--light" />
        <div className="footer__copyright">
          <small>
            2021. My Budget Project,{' '}
            <a href="https://aidandang.com">aidandang.com</a>.
          </small>
        </div>
      </div>
    </div>
  );
};
