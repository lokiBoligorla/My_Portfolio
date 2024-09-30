import React from 'react'
import './Contact.css'
import Mail from '../../assets/mail.png'
import location from '../../assets/location.png'
import phoneicon from '../../assets/Phone.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a261dae9-2d7d-4c46-912f-f56d8a190393");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Feel free to reach out with any inquiries or collaboration opportunities; I’d love to connect!</p>
            <div className="contact-details">
                <div className="contact-detail">
                 <img src={Mail} className='mail'/><p>lokeshboligorla77@gmail.com</p>
                </div>
                <div className="contact-detail">
                <img src={phoneicon}/> <p>+91 9704039230</p>
                </div>
                <div className="contact-detail">
                <img src={location}className='mail' /> <p>Suryapet,Telangana</p>
                </div>

            </div>
        </div>
     <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name' name='name' />
        <label htmlFor="">Your Email</label>
        <input type="text" placeholder='Enter your email' name='email' />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
        <button type='sumbit' className="contact-submit">Submit now</button>
     </form>
      </div>
    </div>
  )
}

export default Contact;
