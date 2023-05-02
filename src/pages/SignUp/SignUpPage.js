import { useState } from "react";
import { Link } from "react-router-dom";
import { SignUpStyle } from "./SignUpStyle";
//  import logo from "../../assets/imagens/logo.png"
import apiAuth from "../../services/apiAuth";
import Logo from "../../assets/Logo";

export default function SignUpPage() {
  const [form, setForm] = useState(
    {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  );

  function handleForm(e) {
    setForm(
      { ...form, [e.target.name]: e.target.value },
    );
  }

  function submitForm(e) {
    e.preventDefault();
    apiAuth.signgUp(form)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  }

  return (
    <SignUpStyle>
      <Logo svgHeight={210} svgWidth={210} />
      <form onSubmit={submitForm}>
        <input
          id="name"
          placeholder="Nome"
          required
          name="name"
          autoComplete="username"
          value={form.name}
          onChange={handleForm}
        />
        <input
          id="email"
          placeholder="Email"
          required
          name="email"
          autoComplete="email"
          type="email"
          value={form.email}
          onChange={handleForm}
        />
        <input
          id="password"
          placeholder="Senha"
          required
          name="password"
          type="password"
          value={form.password}
          onChange={handleForm}
        />
        <input
          id="confirmPassword"
          placeholder="Confirme senha"
          required
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleForm}
        />
        <button type="submit">Cadastrar</button>
        <Link to="/">Já tem cadastro? Faça o login!</Link>
      </form>
    </SignUpStyle>
  );
}
