import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ButtonOf from "./ButtonOf";
import Alert from "react-bootstrap/Alert";
import "./Formulario.css"


const User = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState(""); 
    const [entrar, setEntrar] = useState(false);

    const sendForm = (e) => {
      e.preventDefault();
      console.log("Email: ", email);
      console.log("Password: ", password);
      if (email === "adl@gmail.com" && password === "252525") {
        setAlert(<Alert className="mb-0" key={"success"} variant={"success"}>
        <Alert.Heading className="mb-0">Acceso correcto</Alert.Heading> 
      </Alert>);
      setEntrar(true);
      } else {
        console.log("No es la clave correcta");
        setAlert(<Alert className="mb-0" key={"danger"} variant={"danger"}>
          <Alert.Heading className="mb-0">Contraseña incorrecta</Alert.Heading>
        </Alert>);
        setEntrar(false);
      }
    };
    return (
    <div className="Form">
        <Form onSubmit={sendForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Dirección de correo</Form.Label>
            <Form.Control type="email" placeholder="Ingresar Correo" defaultValue={email} onChange={(e)=> setEmail(e.target.value)} />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresar Contraseña" defaultValue={password} onChange={(e)=> setPassword(e.target.value)}/>
          </Form.Group>

          {alert}
        {email !== "" && password !== "" && (
            <ButtonOf  />
        )}
        </Form>
        </div>
      );
  }

export default User;