import React from "react";
import "./Button.css";
import Button from 'react-bootstrap/Button';
import "./Button.css"

const ButtonOf = () => {
    const texto = "Iniciar Sesion"
  return (
    <>
      <Button variant="warning" className="button" type="submit">{texto}</Button>
    </>
  );
};

export default ButtonOf;