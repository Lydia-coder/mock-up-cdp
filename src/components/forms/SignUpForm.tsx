import React, { useState } from "react";
import SignUpInterface from "../interfaces/SignUpInterFace";
import { SignUpType } from "../types/SignUpTypes";
import CheckNaw from "../commen/CheckNaw";
import { useForm, Controller } from "react-hook-form";
import MaterialUIInput from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  font: {
    fontSize: "12px",
  },
  form: {
    marginTop: "80px",
    textAlign: "left",
  },
  input: {
    display: "block",
    boxSizing: "border-box",
    width: "500px",
    borderRadius: "4px",
    padding: "10px 15px",
    marginBottom: "10px",
    fontSize: "14px",
    marginLeft: "400px",
    backgroundColor: "white",
  },
});

export default function SignUpForm() {
  const classes = useStyles();
  const { control, handleSubmit } = useForm<SignUpInterface, SignUpType>();
  const [voorNaam, setVoor] = useState("");
  const [tussenVoegsel, setTussen] = useState("");
  const [achterNaam, setAchter] = useState("");
  const [adres, setAdres] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = handleSubmit(
    ({ voorNaam, tussenVoegsel, achterNaam, adres, email }) => {
      setVoor(voorNaam);
      setTussen(tussenVoegsel);
      setAchter(achterNaam);
      setAdres(adres);
      setEmail(email);
      console.log(voorNaam);
    }
  );

  return (
    <div>
      <form onSubmit={onSubmit} className={classes.form}>
        <h1>Vul hier uw gegevens in</h1>

        <label>Voornaam:</label>

        <Controller
          as={MaterialUIInput}
          name="voorNaam"
          control={control}
          defaultValue="..."
          rules={{ required: true }}
          className={classes.input}
        />
        <label>Tussenvoegsel:</label>
        <Controller
          as={MaterialUIInput}
          name="tussenVoegsel"
          control={control}
          defaultValue="..."
          rules={{ required: true }}
          className={classes.input}
        />
        <label>Achternaam:</label>
        <Controller
          as={MaterialUIInput}
          name="achterNaam"
          control={control}
          defaultValue="..."
          rules={{ required: true }}
          className={classes.input}
        />

        <label>Adres:</label>
        <Controller
          as={MaterialUIInput}
          name="adres"
          control={control}
          defaultValue="..."
          rules={{ required: true }}
          className={classes.input}
        />
        <label>E-mail:</label>
        <Controller
          as={MaterialUIInput}
          name="email"
          control={control}
          defaultValue="..."
          rules={{ required: true }}
          className={classes.input}
        />

        <input type="submit" />
      </form>
      <CheckNaw
        voorNaam={voorNaam}
        tussenVoegsel={tussenVoegsel}
        achterNaam={achterNaam}
        adres={adres}
        email={email}
      />
    </div>
  );
}
