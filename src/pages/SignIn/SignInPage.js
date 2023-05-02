import { /* useContext  */ useState } from "react";
import { Link } from "react-router-dom";
import { LogContainer } from "./SignInStyle";
//  import { UserContext } from "../../context/userContext";
import apiAuth from "../../services/apiAuth";
//  import logo from "../../assets/imagens/logo.png"
import Logo from "../../assets/Logo";

export default function SignInPage() {
  //  const { user, setUser } = useContext(UserContext);
  const [form, setForm] = useState({ email: "", password: "" });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    apiAuth.signIn(form)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  }

  return (
    <LogContainer>
      <Logo svgHeight={210} svgWidth={210} />
      <form onSubmit={submitForm}>
        <input
          id="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Email"
          value={form.email}
          onChange={handleForm}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
          onChange={handleForm}
          value={form.password}
          required
        />
        <button type="submit">Entrar</button>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
      </form>
    </LogContainer>
  );
}
