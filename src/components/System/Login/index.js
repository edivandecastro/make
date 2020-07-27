import React, {useRef, useState, useEffect} from 'react';
import { Form } from '@unform/web';
import Input from '../../Form/input';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/FormGroup';
import * as Yup from 'yup';
import Notification from '../Util/Notification';
import { AuthenticateUser, TokenValidate } from '../../../service/Api';

export default function Login() {
  const formRef = useRef(null);
  const history = useHistory();
  const [showErrorLogin, setShowErrorLogin] = useState(false);
  const [messageErrorLogin, setMessageErrorLogin] = useState(null);

  let token = localStorage.getItem(localStorage.getItem('uid'));

  TokenValidate(token).then(res => {
    if(res.data.success) {
      history.push('/sistema');
    }
  });

  useEffect(() => {
    document.body.className = "";
    document.body.className = "sidebar-condensed account2"
  });

  async function authenticate(username, password) {
    let token = null
    await AuthenticateUser(username, password).then(res => {
      let id = res.data.user._id
      token = res.data.token;
      localStorage.setItem('uid', id);
      localStorage.setItem(id, token);
    }).catch(err => {
      setShowErrorLogin(true);
      if(err.response) {
        setMessageErrorLogin(err.response.data.error);
      } else {
        setMessageErrorLogin("O Serviço está indisponível no momento, por favor entre em contato com o suporte!");
      }
    });

    if (token) {
      history.push('/sistema');
    }
  }

  async function HandleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required("Informe um usuário válido"),
        password: Yup.string().required("Informe uma senha válida")
      });

      await schema.validate(data, {
        abortEarly: false
      });

      formRef.current.setErrors({});

      authenticate(data.username, data.password);
    } catch (err) {
     if (err instanceof Yup.ValidationError) {
      const errorMessages = {}

      err.inner.forEach(error => {
        errorMessages[error.path] = error.message;
      });

      formRef.current.setErrors(errorMessages);
     }
    }
  }

  return(
    <div className="container" id="login-block">
      <i className="user-img icons-faces-users-03" style={{opacity: 0}}></i>
      <div className="account-info">
        <a href="dashboard.html" className="logo"></a>
        <h3>Modular &amp; Flexível</h3>
        <ul>
          <li><i className="icon-magic-wand"></i>Altamente personalizável</li>
          <li><i className="icon-layers"></i>Sistema modular</li>
          <li><i className="icon-arrow-right-circle"></i>Reorganização de menus</li>
          <li><i className="icon-drop"></i>Diversas Opções de cores</li>
        </ul>
      </div>
      <div className="account-form">
        <Form ref={formRef} onSubmit={HandleSubmit} >
          <Notification message={messageErrorLogin} context="error" show={showErrorLogin} />

          <h3><strong>Logue-se</strong> para acessar sua conta</h3>
          <Row>
            <FormGroup>
              <div className="append-icon">
                <Input type="text" name="username" id="username" className="form-control form-white" placeholder="Usuário" />
                <i className="icon-user"></i>
              </div>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <div className="append-icon m-b-20">
                <Input type="password" name="password" className="form-control form-white" placeholder="Senha" />
                <i className="icon-lock"></i>
              </div>
            </FormGroup>
          </Row>
          <Button type="submit" id="submit-form" className="btn btn-lg btn-dark btn-rounded ladda-button" data-style="expand-left">Entrar</Button>
          <span className="forgot-password"><a id="password" href="account-forgot-password.html">Esqueceu a senha?</a></span>
        </Form>
      </div>
    </div>
  )
};
