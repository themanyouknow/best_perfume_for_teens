import "./contact.scss";
import contact from '../../images/vector-contact-us-background.jpg';

const Contact = () => {
  return (
    <div className="contact">
      <span>
        Email:{" "}
        <a href="mailto:artyomik.arturik@icloud.com">
          artyomik.arturik@icloud.com
        </a>
      </span>
      <span>
        Phone Number: <a href="tel:+9167996387">(916)-799-6387</a> (only use
        number for when email doesn't respond)
      </span>
      <img className="contactImage" src={contact} alt="contact" />
    </div>
  );
};

export default Contact;
