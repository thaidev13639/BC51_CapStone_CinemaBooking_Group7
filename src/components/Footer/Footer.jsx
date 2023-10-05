import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faGooglePlus, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import "../../css/style.css";


export default function Footer() {
  return (
   <section className="footer">
    
  <div className="footer-main  py-4">
    <div className="container py-4">
      <div className="row footer-p">
        <div className="col-lg-4 FooterContact">
          <h3>Find Us</h3>
          <div className="column-2">
            <p>
              Address: 10001 Alleghany st, 5th Avenue, 235 Terry, London.
            </p>
            <p className="mt-3">Phone: <a href="#">+12 23456790</a></p>
            <p className="mt-3">Email: <a href="#">info@example.com</a></p>
            <p className="mt-3">Fax: <a href="#">+ 11 367 21890</a></p>
          </div>
        </div>
        <div className="col-lg-4">
          <h4 className="FooterLogo">
            <a className="logo" href="#">Cinema <FontAwesomeIcon icon={faFilm} /></a>
          </h4>
          <p className="mt-4">
            Duis imperdiet sapien tortor, vitae congue diam auctor vitae.
            Aliquam eget turpis ornare, euismod ligul aeget, enenatis dui.
          </p>
          {/* copyright */}
          <p className="copy-text mt-5 CopyRights">
            © 2023 cinema . All Rights Reserved | WordPress Theme by
            <a href="https://w3layouts.com/">W3Layouts. </a>
          </p>
          {/* //copyright */}
        </div>
        <div className="col-lg-4">
          <h3>Newsletter</h3>
          <div className="end-column FooterSubscribe">
            <p>
              Subscribe to our mailing list and get updates to your email
              inbox.
            </p>
            <form action className="subscribe d-flex mt-3" method="post">
              <input type="email" name="Email" placeholder="Email Address" required />
              <button>
              <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
          <ul className="social mt-4 pt-2 FooterSocial">
            <li>
              <a href="#">  <FontAwesomeIcon icon={faFacebook} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faLinkedin}  /></a>
            </li>
            <li>
              <a href="#"> <FontAwesomeIcon icon={faTwitter} /></a>
            </li>
            <li>
              <a href="#"> <FontAwesomeIcon icon={faGooglePlus} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            </li>
          </ul>

        </div>
      </div>
    </div>
    <hr />
  </div>
  
</section>



  )
}
