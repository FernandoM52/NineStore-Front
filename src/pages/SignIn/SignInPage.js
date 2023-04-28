import { LogContainer } from "./SignInStyle";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import apiAuth from "../../services/apiAuth";
import logo from "../../assets/imagens/logo.png"

export default function SignInPage() {
    const { user, setUser } = useContext(UserContext);
    const [form, setForm] = useState({ email: "", password: "" });
    
    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    
    function submitForm(e) {
        e.preventDefault();
        apiAuth.signIn(form)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data));
    }
    
    return (
        <LogContainer>
            <img alt="logo" src={logo}></img>
            <form onSubmit={submitForm}>
                <input id="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleForm}>
                </input>
                <input id="password"
                    name="password"
                    type="password"
                    placeholder="Senha"
                    onChange={handleForm}
                    value={form.password}
                    required>
                </input>
                <button type="submit">Entrar</button>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
            </form>
        </LogContainer>
    )
};