import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./styles.css";

function RegisterUser() {
  const [isChecked, setIsChecked] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    authorization: false,
  });

  function handleAddUser() {
    const { email, password } = data;
    const senha = password.length;
    console.log(senha);
    if (email.includes("@") === false) {
      setIsErrorEmail(true);
    } else if (JSON.stringify(email).includes(".com") === false) {
      setIsErrorEmail(true);
    } else if (password.length <= 5) {
      setIsErrorPassword(true);
    } else {
      setIsErrorEmail(false);
      setIsErrorEmail(false);
    }
  }

  const toggle = () => setIsChecked({ isChecked: !isChecked });

  return (
    <div className="Register">
      <Form className="attached fluid segment" onSubmit={() => handleAddUser()}>
        <h1>Cadastro</h1>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Nome"
            placeholder="Nome"
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <Form.Input
            fluid
            label="Sobrenome"
            placeholder="Sobrenome"
            type="text"
            value={data.surname}
            onChange={(e) => setData({ ...data, surname: e.target.value })}
          />
        </Form.Group>
        <Form.Input
          label="Email"
          placeholder="Email"
          type="email"
          error={isErrorEmail}
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {isErrorEmail && (
          <Message negative>
            <Message.Header>Email inválido</Message.Header>
          </Message>
        )}
        <Form.Input
          label="Senha"
          type="password"
          error={isErrorPassword}
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {isErrorPassword && (
          <Message negative>
            <Message.Header>Senha menor do que 6 caracteres</Message.Header>
          </Message>
        )}
        <Form.Checkbox
          label="Eu aceito os termos de contrato"
          onChange={toggle}
          checked={isChecked}
        />
        {isChecked ? (
          <Button color="blue" type="submit">
            Cadastrar
          </Button>
        ) : (
          <Button color="grey" disabled>
            Cadastrar
          </Button>
        )}
        <Button color="red">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Cancelar
          </Link>
        </Button>
      </Form>
    </div>
  );
}

export default RegisterUser;
