import { useData } from "../context/useData";

export default function Contact() {

  const {contact, updateContact, resetContact} = useData();

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", contact);
    resetContact();
  }
  return (
   <div className="page">
      <h1>Contact</h1>

      <form onSubmit={formSubmit}>
        <input
          name="contactName"
          placeholder="Name"
          value={contact.contactName}
          onChange={updateContact}
        />
        <br/><br/>

        <input
          name="contactEmail"
          placeholder="Email"
        value={contact.contactEmail}
        onChange={updateContact}
        /><br/><br/>

        <textarea
          name="message"
          placeholder="Message"
        value={contact.message}
        onChange={updateContact}
        /><br/><br/>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
