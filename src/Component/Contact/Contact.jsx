import './Contact.css'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone ,faMapMarkerAlt,faEnvelope  } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
    const [result ,setResult]=useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c35035f4-d3b8-4938-8342-2ecab1cbefce");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
    

        <div  id="Contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch </h1>
                <img src="" alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk </h1>
                    <p>i'm currently available to take on new project ,so feel free to send me a messege about anything thaṭ you want me to work on, you can contact anytime</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faEnvelope} /> <p>sonupatidar5888@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                               <FontAwesomeIcon icon={faPhone} /> <p>+91-9770342465</p>
                        </div>
                        <div className="contact-detail">
       <FontAwesomeIcon icon={faMapMarkerAlt} /><p>indore,M.P.,india</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} action="" className="contact-right">
                    <label htmlFor="">Your Name </label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email </label>
                    <input type="email" placeholder='Enter your Email ' name='email' />
                    <label htmlFor="" > Write your message here </label>
                    <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">submit now </button>
                    {{result}&& <p className="form-result">{result}</p> } 
                    
                </form>
               
            </div>
        </div>
    )
}
export default Contact;
