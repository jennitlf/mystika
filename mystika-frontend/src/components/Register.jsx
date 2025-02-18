import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import file from '../image/file.png';
import '../css/Register.css';
import { API } from "../config";
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        "name":"",
        "phone":"",
        "email":"",
        "password":"",
        "status": "ativo"
    });
    console.log(API)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            console.log(form)
            const response = await fetch(`${API}/auth/register`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(form)
            });
            if(response.ok){
                toast.success('Cadastro realizado com sucesso! Faça login para continuar.');
                navigate('/login')
            }else{
                console.error(response)
            }
        }catch(error){
            console.error("Erro ao realizar cadastro", error);
            toast.error("Erro ao efetuar cadastro");
        }
    };

    return (
        <div className="container-main-register">
            <div className="box-register-1">
                <img src={file} alt="logo site" />
            </div>
            <div className="box-register-2">
                <div className="title-register">Registre-se</div>
                <form className="form-register" onSubmit={handleSubmit} >
                    <div className="form-field-register">
                        <label htmlFor="name">Nome:</label>
                        <input 
                        name="name" 
                        type="text"
                        value={form.name}
                        onChange={(e)=> setForm((prevState) =>({
                            ...prevState,
                            name: e.target.value
                            }))} 
                        />
                    </div>
                    <div className="form-field-register">
                        <label htmlFor="phone">Telefone:</label>
                        <input 
                        name="phone" 
                        type="text" 
                        value={form.phone}
                        onChange={(e)=> setForm((prevState) =>({
                            ...prevState,
                            phone: e.target.value
                            }))} 
                        />
                    </div>
                    <div className="form-field-register">
                        <label htmlFor="e-mail">E-mail:</label>
                        <input 
                        name="e-mail" 
                        type="text" 
                        onChange={(e)=> setForm((prevState) =>({
                            ...prevState,
                            email: e.target.value
                            }))} 
                        />
                    </div>
                    <div className="form-field-register">
                        <label htmlFor="password">Senha:</label>
                        <input 
                        name="password" 
                        type="password"
                        onChange={(e)=> setForm((prevState) =>({
                            ...prevState,
                            password: e.target.value
                        }))} 
                        />
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