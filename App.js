import React, { useState } from "react";

const App = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("template_yz8xhnh", {
      nom,
      prenom,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log('success !');
        setNom("");
        setPrenom("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

  return (
    <form className="contact-form">
      <h2>Contactez-nous</h2>
      <div className="form-content">
        <input
          type="text"
          id="nom"
          name="nom"
          onChange={(e) => setNom(e.target.value)}
          placeholder="nom *"
          value={nom}
          autoComplete="off"
        />
        <input
          type="text"
          id="prenom"
          name="prenom"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
    </form>
  );
};

export default App;