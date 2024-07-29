import { useState } from "react";
import Popup from "../components/Popup";
import formatText from "../helpers";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [sendSucess, setSendSucess] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "c67e32a4-6836-46c7-b0e9-b94aecf82fbe");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setShowPopup(true);
    event.target.reset();
    if (data.success) {
      setSendSucess(true);
    } else {
      setSendSucess(false);
    }
  };

  return (
    <div id='Contact'>
      <h1 style={{ display: "flex", justifyContent: "center", textAlign: "center", marginTop: "5px" }}>Contact Me</h1>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <form onSubmit={onSubmit} style={{ width: "70%" }}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Full Name</label>
            <input name='name' className='formInput' placeholder='Enter your full name' required />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Email Address</label>
            <input name='email' type='email' className='formInput' placeholder='Enter your email address' required />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Message</label>
            <textarea
              name='message'
              className='formInput'
              style={{ height: "100px", fontFamily: "inherit", resize: "none" }}
              placeholder='Enter your message'
              required
            />
          </div>
          <div>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
      {showPopup && (
        <Popup onClose={() => setShowPopup(false)}>
          <h2>{sendSucess ? "Message Successfully Delivered!" : "Message Unsucessfully Delivered"}</h2>
          {formatText(sendSucess ? "Thank you! I will try to get back to you as soon as possible." : "Server unavailable. Please try again later.")}
        </Popup>
      )}
      <div className='contactDetailsContainer'>
        <div className='contactDetailsLeftContainer'>
          <p>Email: ahmer380@yahoo.co.uk</p>
          <p className='marginBottomToggle'>Telephone: +44 7392 062844</p>
        </div>
        <div className='logosContainer'>
          <a href='https://github.com/ahmer380' target='_blank' rel='noopener noreferrer'>
            <img className='logoIcon' src='./logo_images/github.png' alt='Github' />
          </a>
          <a href='https://www.linkedin.com/in/ahmeralam' target='_blank' rel='noopener noreferrer'>
            <img className='logoIcon' src='./logo_images/linkedin.png' alt='LinkedIn' />
          </a>
        </div>
        <div className='contactDetailsRightContainer'>
          <p>
            View my CV{" "}
            <a href='https://drive.google.com/file/d/17WgbdgU3dtw0I1nShvWtbA32R4nc4TFl/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>
              here
            </a>
          </p>
          <p>Ahmer Alam © | all rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
