import React, { useContext, useState } from "react";
import "../css/Login.css";
import file from '../image/file.png';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../context/AuthContext";
import { API } from "../config";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { access_token } = await response.json(); 
        login(access_token);
        toast.success("Login realizado com sucesso!");
        navigate("/consultores");
      } else {
        toast.error("Erro no login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro no login", error);
      toast.error("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="container-main-login">
      <div className="box-login-1">
        <img src={file} alt="logo site" />
      </div>
      <div className="box-login-2">
        <div className="title-login">Login</div>
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="e-mail">E-mail:</label>
            <input
              name="e-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Senha:</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="container-button-submit">
            <button type="submit">Entrar</button>
          </div>
        </form>
        <div className="redirection-to-resgitry">
          <p> Ainda não tem login? <Link className="registry-link" to="/register">Registre-se</Link></p>
        </div>
        <div className="redirection-to-recovery">
          <p><Link className="registry-link" to="/register">Esqueceu</Link> a senha?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
