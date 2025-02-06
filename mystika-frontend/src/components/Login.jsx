import React from "react";
import "../css/Login.css";
import file from '../image/file.png';
import { Link } from "react-router-dom";

const Login = () => {


    return (
        <div className="container-main-login">
            <div className="box-login-1">
                <img src={file} alt="logo site" />
            </div>
            <div className="box-login-2">
                <div className="title-login">Login</div>
                <form className="form-login">
                    <div className="form-field">
                        <label htmlFor="e-mail">Nome:</label>
                        <input name="e-mail" type="text" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Senha:</label>
                        <input name="password" type="password" />
                    </div>
                    <div className="container-button-submit">
                        <button type="submit">Entrar</button>
                    </div>
                </form>
                <div className="redirection-to-resgitry">
                    <p> Ainda não tem login? <Link className="registry-link" to={'/register'}>Registre-se</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;