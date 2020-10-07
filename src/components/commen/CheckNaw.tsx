import React from "react";
import SignUpInterface from "../interfaces/SignUpInterFace";

const CheckNaw: React.FC<SignUpInterface> = (props) => {
  return (
    <div>
      <h1>Kloppen deze gegevens?</h1>
      <ul>
        <li> Voornaam: {props.voorNaam}</li>
        <li> Tussenvoegsel: {props.tussenVoegsel}</li>
        <li>Achternaam:{props.achterNaam}</li>
        <li>Adres: {props.adres}</li>
        <li>Email :{props.email}</li>
      </ul>
    </div>
  );
};

export default CheckNaw;
