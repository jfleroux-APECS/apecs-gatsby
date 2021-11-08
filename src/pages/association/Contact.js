import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

export default function Contact() {
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "/send-email.php",
      headers: { "content-type": "application/json" },
      data: formData,
    })
      .then((result) => {
        if (result.data.sent) {
          setmailSent(result.data.sent);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch((error) => setError(error.message));
  };

  const handleChange = (e, field) => {
    let value = e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="container">
      <h1 className="title is-2 mt-4 has-text-centered">
        Association Pour l’Etude et la Conservation des Sélaciens A.P.E.C.S.
      </h1>
      <hr className="divider" />
      <div className="columns">
        <div className="column">
          <div className="block">
            <h2 className="title is-4 mb-3">
              <strong>HORAIRES D'OUVERTURE :</strong>
            </h2>
            <p className="">
              Nos bureaux sont ouverts du lundi au vendredi de 9h à 17h
            </p>
          </div>

          <div className="block">
            <h2 className="title is-4 mb-3">
              <strong>ADRESSE :</strong>
            </h2>
            <p className="">
              A.P.E.C.S. <br />
              13 rue JF Tartu <br />
              BP 51151 29211 <br />
              BREST Cedex 1 <br />
              <a href="tel:0298054038">02.98.05.40.38</a>
              <br />
              <a href="tel:0677596983">06.77.59.69.83</a>
              <br />
              <a href="mailto:asso@asso-apecs.org">asso@asso-apecs.org</a>
            </p>
          </div>

          <div className="block">
            <MapContainer
              center={[48.3832667, -4.5258234]}
              zoom={14}
              maxZoom={20}
              attributionControl={true}
              zoomControl={true}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              dragging={true}
              animate={true}
              easeLinearity={0.35}
            >
              <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
              <Marker position={[48.3832667, -4.5258234]}>
                <Popup>Popup for any custom information.</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="column">
          <form action="#">
            <div className="field">
              <label className="label">Votre nom</label>
              <div className="control">
                <input
                  id="name"
                  name="name"
                  className="input"
                  type="text"
                  placeholder="Nom..."
                  onChange={(e) => handleChange(e, this.fieldName)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Votre email</label>
              <div className="control">
                <input
                  id="email"
                  name="email"
                  className="input"
                  type="email"
                  placeholder="Email..."
                  value=""
                />
              </div>
              <p className="help is-danger is-hidden">Cet email est invalide</p>
            </div>

            <div className="field">
              <label className="label">Sujet</label>
              <div className="control">
                <input
                  id="subject"
                  name="subject"
                  className="input"
                  type="text"
                  placeholder="Sujet..."
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  id="message"
                  name="message"
                  className="textarea"
                  placeholder="Votre message..."
                ></textarea>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Envoyer</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
