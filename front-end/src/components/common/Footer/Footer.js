import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <hr className="footer__line" />
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
                  <i className="fab fa-facebook-f"></i>
                </a>
              </span>
            </p>
          </div>
        </div>
        <hr className="footer__line" />
        <div className="footer__copyright">
          <small>
            2021. Monthly Budget Project,{' '}
            <a href="https://aidandang.com">aidandang.com</a>.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
