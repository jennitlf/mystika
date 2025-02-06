import React from "react";
import { Link } from "react-router-dom";
import file from '../image/file.png';
import '../css/Register.css';

const Register = () => {

    return (
        <div className="container-main-register">
            <div className="box-register-1">
                <img src={file} alt="logo site" />
            </div>
            <div className="box-register-2">
                <div className="title-register">Registre-se</div>
                <form className="form-register">
                    <div className="form-field-register">
                        <label htmlFor="name">Nome:</label>
                        <input name="name" type="text" />
                    </div>
                    <div className="form-field-register">
                        <label htmlFor="phone">Telefone:</label>
                        <input name="phone" type="text" />
                    </div>
                    <div className="form-field-register">
                        <label htmlFor="e-mail">E-mail:</label>
                        <input name="e-mail" type="text" />
                    </div>
                    <div className="form-field-register">
                        <label htmlFor="password">Senha:</label>
                        <input name="password" type="password" />
                    </div>
                    <div className="container-button-submit">
                        <button type="submit">salvar</button>
                    </div>
                </form>
                <div className="redirection-to-login">
                    <p> Faça <Link className="login-link" to={'/login'}>Login</Link> com sua conta</p>
                </div>
            </div>
        </div>
    )
}

export default Register