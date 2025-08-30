import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import underline from '../../assets/underline.png'
const Footer=()=>{

    return(
        <div  id="footer" className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                <img src={underline} alt="" />
                    <p>i am a frontend developer from,USA with hand's on portfolio project work  </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                     <FontAwesomeIcon icon={faUser} />
                        <input type="email" placeholder='Entēr your email '/>
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                  © 2023 Alex Bennett. All rights reserved
                </p>
                <div className="footer-bottom-right">
                    <p>Term of Services </p>
                    <p>Privacy policy </p>
                    <p>Connect with me </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;